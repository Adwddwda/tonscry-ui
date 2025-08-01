import Head from 'next/head';
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>TonScry Mini App</title>
      </Head>
      <TonConnectUIProvider manifestUrl="https://adwddwda.github.io/tonscry-ui/tonconnect-manifest.json">
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
          <h1>TonScry Mini App</h1>
          <TonConnectButton />
        </main>
      </TonConnectUIProvider>
    </>
  );
}

