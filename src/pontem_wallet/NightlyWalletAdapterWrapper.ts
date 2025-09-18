import { NightlyWalletAdapter, NightlyWalletAdapterConfig } from '@pontem/aptos-wallet-adapter';
import {
  WalletNotReadyError,
  WalletNotConnectedError
} from '@pontem/aptos-wallet-adapter';
import {
  WalletReadyState,
  WalletAdapterNetwork
} from '@pontem/aptos-wallet-adapter';

/**
 * Wrapper for NightlyWalletAdapter that fixes DataCloneError in connect method
 * Inherits from NightlyWalletAdapter and overrides only the connect method
 */
export class NightlyWalletAdapterWrapper extends NightlyWalletAdapter {
  constructor({ timeout = 10000 }: NightlyWalletAdapterConfig = {}) {
    super({ timeout });
  }

  /**
   * Override connect method to fix DataCloneError
   * Copy the original logic but remove the problematic callback
   */
  async connect(): Promise<void> {
    try {
      if (this.connected || this.connecting) return;
      if (
        !(
          this._readyState === WalletReadyState.Loadable ||
          this._readyState === WalletReadyState.Installed
        )
      )
        throw new WalletNotReadyError();
      this._connecting = true;

      const provider = this._provider || (window as any).nightly?.aptos;
      
      // Call connect without the problematic callback
      const response = await provider?.connect();
      // console.log('Nightly connect response:', response)
      
      if (!response) {
        throw new WalletNotConnectedError('No response from Nightly wallet');
      }
      
      this._wallet = {
        publicKey: response?.publicKey || '',
        address: response?.address || '',
        isConnected: true
      };
      //console.log('Wallet state:', this._wallet)

      this.emit('connect', this._wallet.publicKey || '');
      
      const networkData = await provider?.network();
      // console.log('Network data:', networkData)
      
      // Handle missing chainId and api gracefully
      this._chainId = networkData?.chainId?.toString() || '';
      this._api = networkData?.api || '';
      
      // Handle custom network case
      if (networkData?.network === 'custom') {
        this._network = WalletAdapterNetwork.Testnet; // Default to testnet for custom
      } else {
        this._network = networkData?.network?.toLocaleLowerCase() as WalletAdapterNetwork || WalletAdapterNetwork.Testnet;
      }
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }
}
