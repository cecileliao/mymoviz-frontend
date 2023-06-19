import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Moviz</title>
        <link rel="icon" type="image/png" href="logo.png"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
