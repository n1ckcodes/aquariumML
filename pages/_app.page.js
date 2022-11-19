import SSRProvider from "react-bootstrap/SSRProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { UserContextProvider } from "context/userContext";
import Head from "next/head";
function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Head>
        <title>Aquarium Maintenance Log</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="96x96" href="favicon-lg.png"></link>
	      <link rel="icon" type="image/png" sizes="32x32" href="favicon-md.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-sm.png"></link>
      </Head>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </SSRProvider>
  );
}

export default App;
