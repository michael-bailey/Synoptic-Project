import {
  graphql,
  loadQuery,
  RelayEnvironmentProvider,
  usePreloadedQuery,
} from 'react-relay/hooks';
import Link from 'next/link';
import Head from 'next/head';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { AppProps } from 'next/app';

import RelayEnvironment from '../Relay/RelayEnvironment';
import Topbar from '../Components/Navbars/Topbar';

// required for react bootstrap to work with next
import 'bootstrap/dist/css/bootstrap.min.css';

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
