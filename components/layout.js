import Nav from "./nav";
import Header from "./header";
import Footer from "./footer";
import Container from "react-bootstrap/Container";

export default function Layout({ children, user }) {
  return (
    <div>
      <Header user={user} />
      <Container style={{background:"#gray"}}>

        <div>{children}</div>

        <footer className="footer--pin">
          <Footer />
        </footer>
      </Container>
    </div>
  );
}
