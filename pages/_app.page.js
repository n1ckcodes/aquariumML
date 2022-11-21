import SSRProvider from "react-bootstrap/SSRProvider";
import Head from "next/head";
import { UserContextProvider } from "context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import faLib from "helpers/fontAwesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Do not remove or modify the font awesome imports below
//This is required to prevent css issues with the lib when components use SSR
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */


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
