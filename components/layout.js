import Nav from "./nav";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, user }) {
  return (
    <>
    <div>
        <Header user={user} />
          {user ? (
            <nav>
              <Nav />
            </nav>
          ) : (
            <></>
          )}
          <div>{children}</div>
        </div>
        <Footer />
    </>
  );
}
