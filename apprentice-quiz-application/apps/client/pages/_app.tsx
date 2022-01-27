import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { AppProps } from 'next/app';
import Head from 'next/head';
import RelayEnvironment from '../Relay/RelayEnvironment';

// required for react bootstrap to work with next
import 'bootstrap/dist/css/bootstrap.min.css';

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
