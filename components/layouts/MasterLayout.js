import Header from "components/Header";
import Container from "react-bootstrap/Container";

export default function Layout({ children, user }) {
  return (
    <>
      <Header user={user} />
      <Container fluid style={{height:"100%"}}>{children}</Container>
    </>
  );
}
