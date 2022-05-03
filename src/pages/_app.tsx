import * as React from 'react';
import '../../styles/globals.css';
import '../../styles/grid.css';
import { providers } from 'ethers';
import NextHead from 'next/head';
import Header from '../components/components-ui/Header/index';
import Footer from '../components/components-ui/Footer/index';

import { Provider, chain, createClient, defaultChains } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID as string;
const chains = defaultChains;
const defaultChain = chain.mainnet;

const isChainSupported = (chainId?: number) =>
  chains.some((x) => x.id === chainId);

const client = createClient({
  autoConnect: true,
  connectors({ chainId }: any) {
    const chain = chains.find((x) => x.id === chainId) ?? defaultChain;
    const rpcUrl = chain.rpcUrls.alchemy
      ? `${chain.rpcUrls.alchemy}/${alchemyId}`
      : typeof chain.rpcUrls.default === 'string'
      ? chain.rpcUrls.default
      : chain.rpcUrls.default[0];
    return [
      new InjectedConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: 'wagmi',
          chainId: chain.id,
          jsonRpcUrl: rpcUrl,
        },
      }),
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
          rpc: {
            [chain.id]: rpcUrl,
          },
        },
      }),
    ];
  },
  provider({ chainId }: any) {
    return new providers.AlchemyProvider(
      isChainSupported(chainId) ? chainId : defaultChain.id,
      alchemyId
    );
  },
  webSocketProvider({ chainId }: any) {
    return new providers.AlchemyWebSocketProvider(
      isChainSupported(chainId) ? chainId : defaultChain.id,
      alchemyId
    );
  },
});

const App = ({ Component, pageProps }: any) => {
  return (
    <Provider client={client}>
      <NextHead>
        <title>Solido.games</title>
      </NextHead>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default App;
