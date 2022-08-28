import { useRouter } from "next/router";
import Nav from "./nav";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, user }) {
  return (
    <>
      <div class="flex flex-col min-h-screen ">
        <Header user={user} />
        <div class="grid grid-cols-12 h-4/5">
          {user ? (
            <nav class="col-span-2">
              <Nav />
            </nav>
          ) : (
            <></>
          )}
          <div class="p-10 col-span-12 mt-5">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
