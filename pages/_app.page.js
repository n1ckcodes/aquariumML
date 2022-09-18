import "./globals.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContextProvider } from "../context/userContext";
function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </SSRProvider>
  );
}

export default App;
