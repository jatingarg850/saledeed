'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { prankStore } from '../lib/prankStore';

interface PrankContextType {
  isPrankActive: boolean;
  activatePrank: () => void;
  deactivatePrank: () => void;
  prankStats: {
    isActive: boolean;
    activatedAt?: number;
    duration?: number;
  };
}

const PrankContext = createContext<PrankContextType | undefined>(undefined);

export function PrankProvider({ children }: { children: ReactNode }) {
  const [isPrankActive, setIsPrankActive] = useState(false);
  const [prankStats, setPrankStats] = useState(prankStore.getPrankStats());

  useEffect(() => {
    // Initialize prank state synchronously first
    prankStore.initializePrankStateSync();
    setIsPrankActive(prankStore.isPrankActive());
    setPrankStats(prankStore.getPrankStats());
    
    // Then initialize async with server sync
    const initializePrank = async () => {
      await prankStore.initializePrankState();
      setIsPrankActive(prankStore.isPrankActive());
      setPrankStats(prankStore.getPrankStats());
    };
    
    initializePrank();

    // Subscribe to prank state changes
    const unsubscribe = prankStore.subscribe(() => {
      setIsPrankActive(prankStore.isPrankActive());
      setPrankStats(prankStore.getPrankStats());
    });

    // Check for prank state changes from other tabs/windows
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'globalPrankMode') {
        prankStore.initializePrankState();
        setIsPrankActive(prankStore.isPrankActive());
        setPrankStats(prankStore.getPrankStats());
      }
    };

    // Listen for changes in other tabs (only in browser)
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
    }

    // Also check periodically for server state changes and cross-tab sync
    let syncInterval: NodeJS.Timeout | null = null;
    
    if (typeof window !== 'undefined') {
      syncInterval = setInterval(async () => {
        // Check server state
        await prankStore.checkServerState();
        
        // Update local state if changed
        const currentState = prankStore.isPrankActive();
        if (currentState !== isPrankActive) {
          setIsPrankActive(currentState);
          setPrankStats(prankStore.getPrankStats());
        }
      }, 2000); // Check every 2 seconds
    }

    return () => {
      unsubscribe();
      if (typeof window !== 'undefined') {
        window.removeEventListener('storage', handleStorageChange);
        if (syncInterval) {
          clearInterval(syncInterval);
        }
      }
    };
  }, [isPrankActive]);

  const activatePrank = () => {
    prankStore.activatePrank();
  };

  const deactivatePrank = () => {
    prankStore.deactivatePrank();
  };

  return (
    <PrankContext.Provider value={{
      isPrankActive,
      activatePrank,
      deactivatePrank,
      prankStats
    }}>
      {children}
    </PrankContext.Provider>
  );
}

export function usePrank() {
  const context = useContext(PrankContext);
  if (context === undefined) {
    throw new Error('usePrank must be used within a PrankProvider');
  }
  return context;
}