// import { ReactNode } from 'react';
// import { Network } from '@cedra-labs/ts-sdk';
// import { CedraWalletAdapterProvider } from '@cedra-labs/wallet-adapter/packages/wallet-adapter-react/src';

// // Интерфейс для конфигурации dapp
// export interface DappConfig {
//   network: Network;
//   cedraApiKey: string;
// }

// // Пропсы для WalletProvider согласно документации
// export interface WalletProviderProps {
//   children: ReactNode;
//   autoConnect?: boolean;
//   dappConfig: DappConfig;
//   onError?: (error: any) => void;
//   optInWallets?: string[];
//   disableTelemetry?: boolean;
// }

// // Основной WalletProvider компонент согласно документации
// export const WalletProvider = ({
//   children,
//   autoConnect = false,
//   dappConfig,
//   onError,
//   optInWallets = ["Petra", "Pontem", "Martian", "Nightly"],
//   disableTelemetry = false,
// }: WalletProviderProps) => {
//   return (
//     <CedraWalletAdapterProvider
//       autoConnect={autoConnect}
//       dappConfig={dappConfig}
//       onError={onError}
//       optInWallets={optInWallets}
//       disableTelemetry={disableTelemetry}
//     >
//       {children}
//     </CedraWalletAdapterProvider>
//   );
// };
// // Экспортируем useWallet из официального пакета
// export { useWallet } from '@cedra-labs/wallet-adapter/packages/wallet-adapter-react/src';
