
import "./globals.css";
import SSRProvider from 'react-bootstrap/SSRProvider';
import "bootstrap/dist/css/bootstrap.min.css";
function App({ Component, pageProps }) {
  return <SSRProvider><Component {...pageProps} /></SSRProvider>;
}

export default App;
