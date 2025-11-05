// Global prank state management
class PrankStore {
  private static instance: PrankStore;
  private prankMode: boolean = false;
  private listeners: Set<() => void> = new Set();

  static getInstance(): PrankStore {
    if (!PrankStore.instance) {
      PrankStore.instance = new PrankStore();
    }
    return PrankStore.instance;
  }

  // Check if prank mode is active globally
  isPrankActive(): boolean {
    return this.prankMode;
  }

  // Activate prank mode globally
  activatePrank(): void {
    this.prankMode = true;
    this.notifyListeners();
    
    // Store in a way that persists across browser sessions for all users
    if (typeof window !== 'undefined') {
      // Use multiple storage methods to ensure persistence
      localStorage.setItem('globalPrankMode', 'true');
      sessionStorage.setItem('globalPrankMode', 'true');
      
      // Also set a cookie that expires in 24 hours
      document.cookie = `globalPrankMode=true; max-age=86400; path=/`;
      
      // Store the activation timestamp
      localStorage.setItem('prankActivatedAt', Date.now().toString());
      
      // Also sync with server for true global state
      this.syncWithServer('activate');
    }
  }

  // Deactivate prank mode globally
  deactivatePrank(): void {
    this.prankMode = false;
    this.notifyListeners();
    
    if (typeof window !== 'undefined') {
      localStorage.removeItem('globalPrankMode');
      sessionStorage.removeItem('globalPrankMode');
      localStorage.removeItem('prankActivatedAt');
      localStorage.removeItem('resetAttempts');
      
      // Clear the cookie
      document.cookie = 'globalPrankMode=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      
      // Also sync with server
      this.syncWithServer('deactivate');
    }
  }

  // Initialize prank state synchronously from local storage first
  initializePrankStateSync(): void {
    if (typeof window !== 'undefined') {
      const localStoragePrank = localStorage.getItem('globalPrankMode') === 'true';
      const sessionStoragePrank = sessionStorage.getItem('globalPrankMode') === 'true';
      const cookiePrank = document.cookie.includes('globalPrankMode=true');
      
      if (localStoragePrank || sessionStoragePrank || cookiePrank) {
        this.prankMode = true;
        // Ensure all storage methods are synchronized
        localStorage.setItem('globalPrankMode', 'true');
        sessionStorage.setItem('globalPrankMode', 'true');
        document.cookie = `globalPrankMode=true; max-age=86400; path=/`;
      }
      
      this.notifyListeners();
    }
  }

  // Initialize prank state from storage and global service
  async initializePrankState(): Promise<void> {
    // First do sync initialization
    this.initializePrankStateSync();
    
    if (typeof window !== 'undefined') {
      // Then check global state from external service
      try {
        const globalState = await this.fetchGlobalState();
        
        if (globalState.isActive && !this.prankMode) {
          this.prankMode = true;
          // Sync local storage with global state
          localStorage.setItem('globalPrankMode', 'true');
          sessionStorage.setItem('globalPrankMode', 'true');
          document.cookie = `globalPrankMode=true; max-age=86400; path=/`;
          if (globalState.activatedAt) {
            localStorage.setItem('prankActivatedAt', globalState.activatedAt.toString());
          }
          this.notifyListeners();
        } else if (!globalState.isActive && this.prankMode) {
          // Global says prank is off but local says it's on - sync with global
          this.prankMode = false;
          localStorage.removeItem('globalPrankMode');
          sessionStorage.removeItem('globalPrankMode');
          localStorage.removeItem('prankActivatedAt');
          document.cookie = 'globalPrankMode=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
          this.notifyListeners();
        } else if (this.prankMode && !globalState.isActive) {
          // Local says prank is on but global doesn't know - sync with global
          this.syncWithServer('activate');
        }
      } catch (error) {
        // Global service unavailable, continue with local state
        console.warn('Could not sync with global service:', error);
      }
    }
  }

  // Subscribe to prank state changes
  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener());
  }

  // Get prank statistics
  getPrankStats(): { isActive: boolean; activatedAt?: number; duration?: number } {
    if (typeof window === 'undefined') {
      return { isActive: this.prankMode };
    }
    
    const activatedAt = localStorage.getItem('prankActivatedAt');
    return {
      isActive: this.prankMode,
      activatedAt: activatedAt ? parseInt(activatedAt) : undefined,
      duration: activatedAt ? Date.now() - parseInt(activatedAt) : undefined
    };
  }

  // Sync with external service for global state (static deployment)
  private async syncWithServer(action: 'activate' | 'deactivate'): Promise<void> {
    try {
      // Use a free external service for global state synchronization
      const globalState = {
        isActive: action === 'activate',
        activatedAt: action === 'activate' ? Date.now() : null,
        activatedBy: typeof window !== 'undefined' ? navigator.userAgent : 'unknown'
      };

      // Try multiple free services for redundancy
      await this.updateGlobalState(globalState);
      
      // Also use BroadcastChannel for cross-tab sync
      if (typeof window !== 'undefined') {
        const channel = new BroadcastChannel('prank-sync');
        channel.postMessage({ action, timestamp: Date.now() });
      }
    } catch (error) {
      console.warn('Failed to sync prank state:', error);
    }
  }

  // Fetch global state from external service
  private async fetchGlobalState(): Promise<{ isActive: boolean; activatedAt?: number }> {
    try {
      // Try multiple free services for redundancy
      
      // Option 1: Use a simple GitHub Gist (public, free)
      try {
        const GIST_URL = 'https://api.github.com/gists/YOUR_GIST_ID'; // Replace with actual gist
        const response = await fetch(GIST_URL);
        if (response.ok) {
          const gist = await response.json();
          const content = gist.files['prank-state.json']?.content;
          if (content) {
            return JSON.parse(content);
          }
        }
      } catch (gistError) {
        console.warn('Gist service unavailable:', gistError);
      }
      
      // Option 2: Use JSONBin.io (free tier)
      try {
        const JSONBIN_BIN_ID = process.env.NEXT_PUBLIC_JSONBIN_BIN_ID || 'YOUR_BIN_ID';
        const JSONBIN_API_KEY = process.env.NEXT_PUBLIC_JSONBIN_API_KEY || 'YOUR_API_KEY';
        
        if (JSONBIN_BIN_ID !== 'YOUR_BIN_ID' && JSONBIN_API_KEY !== 'YOUR_API_KEY') {
          const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`;
          const response = await fetch(JSONBIN_URL, {
            headers: {
              'X-Master-Key': JSONBIN_API_KEY
            }
          });
          if (response.ok) {
            const data = await response.json();
            return data.record || { isActive: false };
          }
        }
      } catch (jsonbinError) {
        console.warn('JSONBin service unavailable:', jsonbinError);
      }
      
      // Fallback: Use localStorage with timestamp-based expiry
      const localState = localStorage.getItem('globalPrankMode');
      const localTimestamp = localStorage.getItem('prankActivatedAt');
      
      if (localState === 'true' && localTimestamp) {
        const activatedAt = parseInt(localTimestamp);
        // Auto-expire after 24 hours if no external sync
        if (Date.now() - activatedAt < 24 * 60 * 60 * 1000) {
          return { isActive: true, activatedAt };
        }
      }
      
      return { isActive: false };
    } catch (error) {
      console.warn('Failed to fetch global state:', error);
      return { isActive: false };
    }
  }

  // Update global state in external service
  private async updateGlobalState(state: any): Promise<void> {
    let success = false;
    
    // Try multiple services for redundancy
    
    // Option 1: Try JSONBin.io (replace with your actual bin ID and API key)
    try {
      const JSONBIN_BIN_ID = process.env.NEXT_PUBLIC_JSONBIN_BIN_ID || 'YOUR_BIN_ID';
      const JSONBIN_API_KEY = process.env.NEXT_PUBLIC_JSONBIN_API_KEY || 'YOUR_API_KEY';
      
      if (JSONBIN_BIN_ID !== 'YOUR_BIN_ID' && JSONBIN_API_KEY !== 'YOUR_API_KEY') {
        const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`;
        const response = await fetch(JSONBIN_URL, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': JSONBIN_API_KEY
          },
          body: JSON.stringify(state)
        });
        
        if (response.ok) {
          success = true;
          console.log(`🎪 Global prank ${state.isActive ? 'activated' : 'deactivated'} via JSONBin!`);
        }
      }
    } catch (jsonbinError) {
      console.warn('JSONBin update failed:', jsonbinError);
    }
    
    // Option 2: Try a simple webhook service (like webhook.site for testing)
    if (!success) {
      try {
        // You can replace this with any webhook service
        const WEBHOOK_URL = 'https://webhook.site/YOUR_UNIQUE_ID'; // Replace with actual webhook
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'prank-state-update',
            state: state,
            timestamp: Date.now()
          })
        });
        success = true;
        console.log(`🎪 Global prank ${state.isActive ? 'activated' : 'deactivated'} via webhook!`);
      } catch (webhookError) {
        console.warn('Webhook update failed:', webhookError);
      }
    }
    
    // Fallback: At least update localStorage and broadcast to other tabs
    if (typeof window !== 'undefined') {
      if (state.isActive) {
        localStorage.setItem('globalPrankMode', 'true');
        localStorage.setItem('prankActivatedAt', state.activatedAt?.toString() || Date.now().toString());
      } else {
        localStorage.removeItem('globalPrankMode');
        localStorage.removeItem('prankActivatedAt');
      }
      
      // Broadcast to other tabs/windows
      const channel = new BroadcastChannel('prank-sync');
      channel.postMessage({ 
        type: 'state-update', 
        state: state, 
        timestamp: Date.now() 
      });
      
      if (!success) {
        console.log(`🎪 Prank ${state.isActive ? 'activated' : 'deactivated'} locally (external services unavailable)`);
      }
    }
  }

  // Check global state periodically
  async checkServerState(): Promise<void> {
    if (typeof window !== 'undefined') {
      try {
        const globalState = await this.fetchGlobalState();
        
        if (globalState.isActive !== this.prankMode) {
          this.prankMode = globalState.isActive;
          
          if (globalState.isActive) {
            localStorage.setItem('globalPrankMode', 'true');
            sessionStorage.setItem('globalPrankMode', 'true');
            document.cookie = `globalPrankMode=true; max-age=86400; path=/`;
            if (globalState.activatedAt) {
              localStorage.setItem('prankActivatedAt', globalState.activatedAt.toString());
            }
          } else {
            localStorage.removeItem('globalPrankMode');
            sessionStorage.removeItem('globalPrankMode');
            localStorage.removeItem('prankActivatedAt');
            document.cookie = 'globalPrankMode=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
          }
          
          this.notifyListeners();
        }
      } catch (error) {
        // Global service unavailable, continue with local state
      }
    }
  }
}

export const prankStore = PrankStore.getInstance();