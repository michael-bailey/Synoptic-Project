import {
  graphql,
  loadQuery,
  RelayEnvironmentProvider,
  usePreloadedQuery,
} from 'react-relay/hooks';
import { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import RelayEnvironment from '../Relay/RelayEnvironment';

// required for react bootstrap to work with next
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Topbar from '../Components/Navbars/Topbar';
import { Suspense } from 'react';

function App({ Component, pageProps }: AppProps) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Head>
        <title>Quiz App</title>
      </Head>

      <main className="app">
        <SafeHydrate>
          <Suspense fallback={'Loading'}>
            <Topbar />
            <Component {...pageProps} />
          </Suspense>
        </SafeHydrate>
      </main>
    </RelayEnvironmentProvider>
  );
}

// used to disable server side rendering,
//as it doesn't currently work with suspense
// which is used by react-relay
function SafeHydrate({ children }) {
  console.log(typeof window === 'undefined');
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
}

export default App;
