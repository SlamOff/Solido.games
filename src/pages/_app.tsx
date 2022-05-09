import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { useState, useEffect } from 'react';
import '../../styles/globals.css';
import '../../styles/grid.css';
import '../../styles/fonts.css';
import { providers } from 'ethers';
import NextHead from 'next/head';
import Header from '../components/components-ui/Header';
import Footer from '../components/components-ui/Footer';
import { Provider as Wagmi, chain, createClient, defaultChains } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { useAccount } from 'wagmi';

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
  // const { data } = useAccount();

  // useEffect(() => {
  //   const walletData = localStorage.getItem('wagmi.REACT_QUERY_OFFLINE_CACHE');
  //   console.log(walletData.indexOf('0x'));

  // }, []);

  // const [name, setName] = useState(() => {
  //   // getting stored value
  //   const walletData = JSON.parse(localStorage.getItem('wagmi.REACT_QUERY_OFFLINE_CACHE'));
  //   console.log(walletData);
  //   return initialValue || "";
  // });

  
  return (
    <Provider store={store}>
      <Wagmi client={client}>
        <NextHead>
            <title>Solido.games</title>
            {/* <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
        </NextHead>
          <Header />
          <div className='main-content'>
            <Component {...pageProps} />
          </div>
        <Footer />
      </Wagmi>
    </Provider>
  );
}

export default App;
