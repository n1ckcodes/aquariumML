import "./globals.css";
import RootLayout from "../components/Layout";
import { useRouter } from "next/router";
import { ClerkProvider } from "@clerk/nextjs";
function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ClerkProvider {...pageProps}>
      <RootLayout>
        <Component key={router.asPath} {...pageProps} />
      </RootLayout>
    </ClerkProvider>
  );
}

export default App;
