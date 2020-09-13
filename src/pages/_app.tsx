import React, { ReactElement } from 'react';
import '../styles/index.css';
import { AppProps } from 'next/app';
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: 'include',
  },
});

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider value={client}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default App;
