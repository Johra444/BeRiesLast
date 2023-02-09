import "./style.css";
import "@rainbow-me/rainbowkit/styles.css";
import Head from "next/head";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  Theme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";



const { chains, provider } = configureChains(
  [chain.goerli],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "BeRies App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function MyApp({ Component: Component, pageProps: pageProps }) {
  return (

    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        modalSize="compact"
        initialChain={chain.goerli}
        chains={chains}
        theme={lightTheme({
          accentColor: "#0000ff",
          accentColorForeground: "white",
          borderRadius: "medium",
          fontStack: "system",
          overlayBlur: "small",
        })}
        
      >
        {" "}
        {}
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0000ff"/>
            <meta name="theme-color" content="#ffffff"/>
            
        </Head>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

