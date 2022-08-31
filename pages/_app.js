import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
        <meta name="theme-color" content="#ffba44" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
