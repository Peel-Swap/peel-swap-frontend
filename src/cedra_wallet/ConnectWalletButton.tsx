// import React, { useState, useCallback, useEffect } from 'react';
// import { useWallet } from './WalletProvider';
// import { ChevronDown, Copy, LogOut, Wallet } from 'lucide-react';

// const ConnectWalletButton: React.FC = () => {
//   const {
//     wallets,
//     wallet,
//     account,
//     connected,
//     isLoading: connecting,
//     connect,
//     disconnect,
//     network,
//     signMessage,
//     signAndSubmitTransaction,
//   } = useWallet();

//   const [showWalletList, setShowWalletList] = useState(false);
//   const [showDisconnectMenu, setShowDisconnectMenu] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const [balance, setBalance] = useState<string | null>(null);
//   const [loadingBalance, setLoadingBalance] = useState(false);

//   const handleWalletSelect = useCallback(async (walletName: string) => {
//     try {
//       await connect(walletName);
//       setShowWalletList(false);
//     } catch (error) {
//       console.error('Failed to connect wallet:', error);
//     }
//   }, [connect]);

//   const handleDisconnect = useCallback(async () => {
//     try {
//       await disconnect();
//       setShowDisconnectMenu(false);
//     } catch (error) {
//       console.error('Failed to disconnect wallet:', error);
//     }
//   }, [disconnect]);

//   const handleCopyAddress = useCallback(async () => {
//     if (account?.address) {
//       try {
//         await navigator.clipboard.writeText(account.address.toString());
//         setCopied(true);
//         setTimeout(() => setCopied(false), 2000);
//       } catch (error) {
//         console.error('Failed to copy address:', error);
//       }
//     }
//   }, [account?.address]);

//   const fetchBalance = useCallback(async () => {
//     if (!wallet || !account?.address || !network) return;
    
//     setLoadingBalance(true);
//     try {
//       const name: string = network.name || '';
//       if (name.toLowerCase().includes('cedra')) {
//         // Для Cedra сети можно добавить логику получения баланса
//         // Пока что показываем N/A
//         setBalance('N/A');
//       } else {
//         // Если не Cedra сеть, показываем N/A
//         setBalance('N/A');
//       }
//     } catch (error) {
//       console.error('Failed to fetch balance:', error);
//       setBalance('N/A');
//     } finally {
//       setLoadingBalance(false);
//     }
//   }, [wallet, account?.address, network]);

//   // Fetch balance when wallet connects or network changes
//   useEffect(() => {
//     if (connected && account?.address && network) {
//       fetchBalance();
//     } else {
//       setBalance(null);
//     }
//   }, [connected, account?.address, network, fetchBalance]);

//   const formatAddress = (address: string | null | undefined): string => {
//     if (!address) return '';
//     const addrStr = address.toString();
//     if (addrStr.length <= 10) return addrStr;
//     return `${addrStr.slice(0, 6)}...${addrStr.slice(-4)}`;
//   };

//   const getWalletIcon = (wallet: { icon?: string; name: string }): string => {
//     // First try to use the original wallet icon if available
//     if (wallet.icon) {
//       return wallet.icon;
//     }
    
//     // Use custom styled icons for specific wallets
//     switch (wallet.name) {
//       case 'Nightly':
//         // Nightly Wallet - Dark theme with moon icon
//         return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaD0iMzIiIHJ4PSI4IiBmaWxsPSIjMUExQTFBIi8+CjxwYXRoIGQ9Ik0xNiA2QzE5LjMxMzcgNiAyMiA4LjY4NjMgMjIgMTJDMjIgMTUuMzEzNyAxOS4zMTM3IDE4IDE2IDE4QzEyLjY4NjMgMTggMTAgMTUuMzEzNyAxMCAxMkMxMCA4LjY4NjMgMTIuNjg2MyA2IDE2IDZaIiBmaWxsPSIjRkZGRkZGIi8+CjxwYXRoIGQ9Ik0xNiA4QzE4LjIwOTEgOCAyMCA5Ljc5MDkgMjAgMTJDMjAgMTQuMjA5MSAxOC4yMDkxIDE2IDE2IDE2QzEzLjc5MDkgMTYgMTIgMTQuMjA5MSAxMiAxMkMxMiA5Ljc5MDkgMTMuNzkwOSA4IDE2IDhaIiBmaWxsPSIjMUExQTFBIi8+CjxwYXRoIGQ9Ik0xNiAxMkMxNiAxMiAxOCAxNCAyMCAxNkMxOCAxOCAxNiAxNiAxNiAxNloiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+';
//       case 'Pontem':
//         // Pontem Wallet - Blue gradient with P logo
//         return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaD0iMzIiIHJ4PSI4IiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iMzIiIHkyPSIzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDA3NkZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwOUNGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxwYXRoIGQ9Ik0xMiAxMEgxNkMxOC4yMDkxIDEwIDIwIDExLjc5MDkgMjAgMTRDMjAgMTYuMjA5MSAxOC4yMDkxIDE4IDE2IDE4SDEyVjEwWk0xNCAxMlYxNkgxNkMxNy4xMDQ2IDE2IDE4IDE1LjEwNDYgMTggMTRDMTggMTIuODk1NCAxNy4xMDQ2IDEyIDE2IDEySDE0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+';
//       case 'Petra':
//         // Petra Wallet - Orange gradient with diamond icon
//         return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaD0iMzIiIHJ4PSI4IiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iMzIiIHkyPSIzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkY2QjAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGODAwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxwYXRoIGQ9Ik0xNiA4TDIwIDEyTDE2IDE2TDEyIDEyTDE2IDhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMTBMMTggMTJMMTYgMTRMMTQgMTJMMTYgMTBaIiBmaWxsPSIjRkY2QjAwIi8+Cjwvc3ZnPg==';
//       case 'Martian':
//         // Martian Wallet - Red gradient with Mars icon
//         return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaD0iMzIiIHJ4PSI4IiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iMzIiIHkyPSIzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkY0NDQ0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGODAwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjgiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjIiIGZpbGw9IiNGRjQ0NDQiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIxMiIgcj0iMiIgZmlsbD0iI0ZGNDQ0NCIvPgo8cGF0aCBkPSJNMTIgMjBMMTYgMjRMMjAgMjBMMTYgMjBMMTIgMjBaIiBmaWxsPSIjRkY0NDQ0Ii8+Cjwvc3ZnPg==';
//       default:
//         // Generic wallet icon - Gray with wallet symbol
//         return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaD0iMzIiIHJ4PSI4IiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik0xMCAxMEgyMkMyMy4xMDQ2IDEwIDI0IDEwLjg5NTQgMjQgMTJWMTlDMjQgMjAuMTA0NiAyMy4xMDQ2IDIxIDIyIDIxSDEwQzguODk1NDMgMjEgOCAyMC4xMDQ2IDggMTlWMTJDOCAxMC44OTU0IDguODk1NDMgMTAgMTAgMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjIgMTJIMjRWMTRIMjJWMTJaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPg==';
//     }
//   };

//   if (connected && account) {
//     return (
//       <div className="relative">
//         {/* Connected Wallet Display */}
//         <div 
//           className="flex items-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg cursor-pointer transition-colors min-h-[48px]"
//           onClick={() => setShowDisconnectMenu(!showDisconnectMenu)}
//         >
//           <img 
//             src={getWalletIcon(wallet!)} 
//             alt={wallet?.name} 
//             className="w-4 h-4 rounded"
//             onError={(e) => {
//               // Use fallback icon based on wallet name
//               switch (wallet?.name) {
//                 case 'Nightly':
//                   e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaD0iMzIiIHJ4PSI4IiBmaWxsPSIjMUExQTFBIi8+CjxwYXRoIGQ9Ik0xNiA2QzE5LjMxMzcgNiAyMiA4LjY4NjMgMjIgMTJDMjIgMTUuMzEzNyAxOS4zMTM3IDE4IDE2IDE4QzEyLjY4NjMgMTggMTAgMTUuMzEzNyAxMCAxMkMxMCA4LjY4NjMgMTIuNjg2MyA2IDE2IDZaIiBmaWxsPSIjRkZGRkZGIi8+CjxwYXRoIGQ9Ik0xNiA4QzE4LjIwOTEgOCAyMCA5Ljc5MDkgMjAgMTJDMjAgMTQuMjA5MSAxOC4yMDkxIDE2IDE2IDE2QzEzLjc5MDkgMTYgMTIgMTQuMjA5MSAxMiAxMkMxMiA5Ljc5MDkgMTMuNzkwOSA4IDE2IDhaIiBmaWxsPSIjMUExQTFBIi8+CjxwYXRoIGQ9Ik0xNiAxMkMxNiAxMiAxOCAxNCAyMCAxNkMxOCAxOCAxNiAxNiAxNiAxNloiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+';
//                   break;
//                 case 'Pontem':
//                   e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaD0iMzIiIHJ4PSI4IiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iMzIiIHkyPSIzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDA3NkZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwOUNGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxwYXRoIGQ9Ik0xMiAxMEgxNkMxOC4yMDkxIDEwIDIwIDExLjc5MDkgMjAgMTRDMjAgMTYuMjA5MSAxOC4yMDkxIDE4IDE2IDE4SDEyVjEwWk0xNCAxMlYxNkgxNkMxNy4xMDQ2IDE2IDE4IDE1LjEwNDYgMTggMTRDMTggMTIuODk1NCAxNy4xMDQ2IDEyIDE2IDEySDE0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+';
//                   break;
//                 case 'Petra':
//                   e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaD0iMzIiIHJ4PSI4IiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iMzIiIHkyPSIzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkY2QjAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGODAwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxwYXRoIGQ9Ik0xNiA4TDIwIDEyTDE2IDE2TDEyIDEyTDE2IDhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMTBMMTggMTJMMTYgMTRMMTQgMTJMMTYgMTBaIiBmaWxsPSIjRkY2QjAwIi8+Cjwvc3ZnPg==';
//                   break;
//                 case 'Martian':
//                   e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaD0iMzIiIHJ4PSI4IiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iMzIiIHkyPSIzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkY0NDQ0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGODAwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjgiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjIiIGZpbGw9IiNGRjQ0NDQiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIxMiIgcj0iMiIgZmlsbD0iI0ZGNDQ0NCIvPgo8cGF0aCBkPSJNMTIgMjBMMTYgMjRMMjAgMjBMMTYgMjBMMTIgMjBaIiBmaWxsPSIjRkY0NDQ0Ii8+Cjwvc3ZnPg==';
//                   break;
//                 default:
//                   e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaD0iMzIiIHJ4PSI4IiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik0xMCAxMEgyMkMyMy4xMDQ2IDEwIDI0IDEwLjg5NTQgMjQgMTJWMTlDMjQgMjAuMTA0NiAyMy4xMDQ2IDIxIDIyIDIxSDEwQzguODk1NDMgMjEgOCAyMC4xMDQ2IDggMTlWMTJDOCAxMC44OTU0IDguODk1NDMgMTAgMTAgMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjIgMTJIMjRWMTRIMjJWMTJaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPg==';
//               }
//             }}
//           />
//           <div className="flex flex-col">
//             <span className="text-white font-medium text-sm">
//               {formatAddress(account.address?.toString())}
//             </span>
//             {/* Balance display - only on desktop */}
//             <div className="hidden sm:block">
//               {loadingBalance ? (
//                 <div className="text-xs text-white/60 animate-pulse">Loading...</div>
//               ) : balance ? (
//                 <div className="text-xs text-orange-300 font-medium">{balance}</div>
//               ) : (
//                 <div className="text-xs text-white/40">Balance unavailable</div>
//               )}
//             </div>
//           </div>
//           <ChevronDown className={`w-3 h-3 text-white/70 transition-transform ${showDisconnectMenu ? 'rotate-180' : ''}`} />
//         </div>

//         {/* Disconnect Menu */}
//         {showDisconnectMenu && (
//           <div className="absolute top-full right-0 mt-2 w-48 bg-slate-800 border border-white/20 rounded-lg shadow-xl z-[9999]">
//             <div className="p-2">
//               <button
//                 onClick={handleCopyAddress}
//                 className="w-full flex items-center space-x-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors"
//               >
//                 <Copy className="w-4 h-4 text-white/70" />
//                 <span className="text-white text-sm">
//                   {copied ? 'Copied!' : 'Copy Address'}
//                 </span>
//               </button>
//               <button
//                 onClick={fetchBalance}
//                 disabled={loadingBalance}
//                 className="w-full flex items-center space-x-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <Wallet className="w-4 h-4 text-white/70" />
//                 <span className="text-white text-sm">
//                   {loadingBalance ? 'Refreshing...' : 'Refresh Balance'}
//                 </span>
//               </button>
//               <button
//                 onClick={handleDisconnect}
//                 className="w-full flex items-center space-x-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors"
//               >
//                 <LogOut className="w-4 h-4 text-white/70" />
//                 <span className="text-white text-sm">Disconnect</span>
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div className="relative">
//       {/* Connect Button */}
//       <button
//         onClick={() => setShowWalletList(!showWalletList)}
//         disabled={connecting}
//         className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
//       >
//         {connecting ? 'Connecting...' : 'Connect Wallet'}
//       </button>

//       {/* Wallet List */}
//       {showWalletList && (
//         <div className="absolute top-full right-0 mt-2 w-72 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl z-[9999] animate-in slide-in-from-top-2 duration-200">
//           <div className="p-4">
//             <h3 className="text-white font-semibold text-sm mb-4 flex items-center">
//               <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
//               Select Wallet
//             </h3>
//             <div className="space-y-2">
//               {wallets.map((wallet) => (
//                 <button
//                   key={wallet.name}
//                   onClick={() => handleWalletSelect(wallet.name)}
//                   disabled={wallet.readyState !== 'Installed'}
//                   className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-white/10 hover:scale-[1.02] rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
//                 >
//                   <div className="relative">
//                     <img 
//                       src={getWalletIcon(wallet)} 
//                       alt={wallet.name} 
//                       className="w-6 h-6 rounded-lg group-hover:scale-110 transition-transform duration-200"
//                       onError={(e) => {
//                         // Use fallback icon based on wallet name
//                         switch (wallet.name) {
//                           case 'Nightly':
//                             e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaD0iMzIiIHJ4PSI4IiBmaWxsPSIjMUExQTFBIi8+CjxwYXRoIGQ9Ik0xNiA2QzE5LjMxMzcgNiAyMiA4LjY4NjMgMjIgMTJDMjIgMTUuMzEzNyAxOS4zMTM3IDE4IDE2IDE4QzEyLjY4NjMgMTggMTAgMTUuMzEzNyAxMCAxMkMxMCA4LjY4NjMgMTIuNjg2MyA2IDE2IDZaIiBmaWxsPSIjRkZGRkZGIi8+CjxwYXRoIGQ9Ik0xNiA4QzE4LjIwOTEgOCAyMCA5Ljc5MDkgMjAgMTJDMjAgMTQuMjA5MSAxOC4yMDkxIDE2IDE2IDE2QzEzLjc5MDkgMTYgMTIgMTQuMjA5MSAxMiAxMkMxMiA5Ljc5MDkgMTMuNzkwOSA4IDE2IDhaIiBmaWxsPSIjMUExQTFBIi8+CjxwYXRoIGQ9Ik0xNiAxMkMxNiAxMiAxOCAxNCAyMCAxNkMxOCAxOCAxNiAxNiAxNiAxNloiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+';
//                             break;
//                           case 'Pontem':
//                             e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaD0iMzIiIHJ4PSI4IiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iMzIiIHkyPSIzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDA3NkZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwOUNGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxwYXRoIGQ9Ik0xMiAxMEgxNkMxOC4yMDkxIDEwIDIwIDExLjc5MDkgMjAgMTRDMjAgMTYuMjA5MSAxOC4yMDkxIDE4IDE2IDE4SDEyVjEwWk0xNCAxMlYxNkgxNkMxNy4xMDQ2IDE2IDE4IDE1LjEwNDYgMTggMTRDMTggMTIuODk1NCAxNy4xMDQ2IDEyIDE2IDEySDE0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+';
//                             break;
//                           case 'Petra':
//                             e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaD0iMzIiIHJ4PSI4IiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iMzIiIHkyPSIzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkY2QjAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGODAwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxwYXRoIGQ9Ik0xNiA4TDIwIDEyTDE2IDE2TDEyIDEyTDE2IDhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMTBMMTggMTJMMTYgMTRMMTQgMTJMMTYgMTBaIiBmaWxsPSIjRkY2QjAwIi8+Cjwvc3ZnPg==';
//                             break;
//                           case 'Martian':
//                             e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaD0iMzIiIHJ4PSI4IiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iMzIiIHkyPSIzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkY0NDQ0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGODAwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjgiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjIiIGZpbGw9IiNGRjQ0NDQiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIxMiIgcj0iMiIgZmlsbD0iI0ZGNDQ0NCIvPgo8cGF0aCBkPSJNMTIgMjBMMTYgMjRMMjAgMjBMMTYgMjBMMTIgMjBaIiBmaWxsPSIjRkY0NDQ0Ii8+Cjwvc3ZnPg==';
//                             break;
//                           default:
//                             e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaD0iMzIiIHJ4PSI4IiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik0xMCAxMEgyMkMyMy4xMDQ2IDEwIDI0IDEwLjg5NTQgMjQgMTJWMTlDMjQgMjAuMTA0NiAyMy4xMDQ2IDIxIDIyIDIxSDEwQzguODk1NDMgMjEgOCAyMC4xMDQ2IDggMTlWMTJDOCAxMC44OTU0IDguODk1NDMgMTAgMTAgMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjIgMTJIMjRWMTRIMjJWMTJaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPg==';
//                         }
//                       }}
//                     />
//                     {wallet.readyState === 'Installed' && (
//                       <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-800"></div>
//                     )}
//                   </div>
//                   <div className="flex-1 text-left">
//                     <div className="text-white font-medium text-sm group-hover:text-orange-300 transition-colors">
//                       {wallet.name}
//                     </div>
//                     <div className="text-white/60 text-xs">
//                       {wallet.readyState === 'Installed' ? (
//                         <span className="text-green-400">✓ Ready to connect</span>
//                       ) : (
//                         <span className="text-red-400">✗ Not installed</span>
//                       )}
//                     </div>
//                   </div>
//                   {wallet.readyState === 'Installed' && (
//                     <div className="text-white/40 group-hover:text-orange-300 transition-colors">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </div>
//                   )}
//                 </button>
//               ))}
//             </div>
//             <div className="mt-4 pt-3 border-t border-white/10">
//               <p className="text-white/50 text-xs text-center">
//                 Choose your preferred wallet to connect
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Backdrop to close dropdown */}
//       {showWalletList && (
//         <div 
//           className="fixed inset-0 z-[9998]" 
//           onClick={() => setShowWalletList(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default ConnectWalletButton;