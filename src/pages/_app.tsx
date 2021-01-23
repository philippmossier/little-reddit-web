import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import '../styles/index.css';
// import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <div>
      <Head>
        <script src="https://kit.fontawesome.com/3a479e02a7.js" crossOrigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />;
    </div>
  );
}

export default App;
