import { AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import '../styles/index.css';
// import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

export default App;
