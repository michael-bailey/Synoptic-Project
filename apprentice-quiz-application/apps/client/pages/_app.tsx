import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import RelayEnvironment from '../Relay/RelayEnvironment';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Head>
        <title>Welcome to client!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </RelayEnvironmentProvider>
  );
}

export default CustomApp;
