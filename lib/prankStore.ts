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

  // Initialize prank state from storage and server
  async initializePrankState(): Promise<void> {
    // First do sync initialization
    this.initializePrankStateSync();
    
    if (typeof window !== 'undefined') {
      // Then check server state
      try {
        const response = await fetch('/api/prank-status');
        const serverState = await response.json();
        
        if (serverState.isActive && !this.prankMode) {
          this.prankMode = true;
          // Sync local storage with server state
          localStorage.setItem('globalPrankMode', 'true');
          sessionStorage.setItem('globalPrankMode', 'true');
          document.cookie = `globalPrankMode=true; max-age=86400; path=/`;
          if (serverState.activatedAt) {
            localStorage.setItem('prankActivatedAt', serverState.activatedAt.toString());
          }
          this.notifyListeners();
        } else if (!serverState.isActive && this.prankMode) {
          // Server says prank is off but local says it's on - sync with server
          this.prankMode = false;
          localStorage.removeItem('globalPrankMode');
          sessionStorage.removeItem('globalPrankMode');
          localStorage.removeItem('prankActivatedAt');
          document.cookie = 'globalPrankMode=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
          this.notifyListeners();
        } else if (this.prankMode && !serverState.isActive) {
          // Local says prank is on but server doesn't know - sync with server
          this.syncWithServer('activate');
        }
      } catch (error) {
        // Server unavailable, continue with local state
        console.warn('Could not sync with server:', error);
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

  // Sync with server for true global state
  private async syncWithServer(action: 'activate' | 'deactivate'): Promise<void> {
    try {
      await fetch('/api/prank-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action,
          userAgent: navigator.userAgent
        })
      });
    } catch (error) {
      console.warn('Failed to sync prank state with server:', error);
    }
  }

  // Check server state periodically
  async checkServerState(): Promise<void> {
    if (typeof window !== 'undefined') {
      try {
        const response = await fetch('/api/prank-status');
        const serverState = await response.json();
        
        if (serverState.isActive !== this.prankMode) {
          this.prankMode = serverState.isActive;
          
          if (serverState.isActive) {
            localStorage.setItem('globalPrankMode', 'true');
            sessionStorage.setItem('globalPrankMode', 'true');
            document.cookie = `globalPrankMode=true; max-age=86400; path=/`;
            if (serverState.activatedAt) {
              localStorage.setItem('prankActivatedAt', serverState.activatedAt.toString());
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
        // Server unavailable, continue with local state
      }
    }
  }
}

export const prankStore = PrankStore.getInstance();