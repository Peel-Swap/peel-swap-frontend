import { ReactNode } from 'react';
import {
  WalletProvider as PontemWalletProvider,
  PontemWalletAdapter,
  AptosWalletAdapter,
  MartianWalletAdapter,
  WalletReadyState,
  AccountKeys,
  NetworkInfo,
  Wallet,
  WalletAdapter,
  WalletName
} from '@pontem/aptos-wallet-adapter';
import { NightlyWalletAdapterWrapper } from './NightlyWalletAdapterWrapper';

// Re-export types and enums for compatibility
export { WalletReadyState, AccountKeys, NetworkInfo, Wallet, WalletAdapter, WalletName };

// Simple Wallet Provider Component
interface WalletProviderProps {
  children: ReactNode;
  autoConnect?: boolean;
  onError?: (error: Error) => void;
}

export const WalletProvider = ({
  children,
  autoConnect = false,
  onError
}: WalletProviderProps) => {
  // Simple wallets list
  const wallets = [
    new PontemWalletAdapter(),
    new NightlyWalletAdapterWrapper(),
    new AptosWalletAdapter(),
    new MartianWalletAdapter()
  ];

  return (
    <PontemWalletProvider
      wallets={wallets}
      autoConnect={autoConnect}
      onError={(error) => {
        console.error('Wallet error:', error);
        onError?.(error);
      }}
    >
      {children as any}
    </PontemWalletProvider>
  );
};

// Export wallet adapters
export { PontemWalletAdapter, NightlyWalletAdapterWrapper, AptosWalletAdapter, MartianWalletAdapter };