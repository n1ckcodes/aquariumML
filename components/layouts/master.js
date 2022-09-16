
import Header from "../header";
import Footer from "../footer";
import Container from "react-bootstrap/Container";

export default function Layout({ children, user }) {
  return (
    <div>
      <Header user={user} />
      <Container fluid style={{ background: "#gray" }}>
       {children}
          <Footer />
      </Container>
    </div>
  );
}
