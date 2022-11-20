import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
export default function MobileDashboardNav(props) {
  const { pathname } = useRouter();
  console.log('here')
  return (
    <Navbar bg="primary" fixed="bottom" variant="dark" className="py-4">
      <Container fluid style={{textAlign:"center", color:"white"}}>

          <Col xs={3}><FontAwesomeIcon icon="home" /> </Col>
          <Col xs={3}><FontAwesomeIcon icon="fish" /></Col>
          <Col xs={3}><FontAwesomeIcon icon="tools" /></Col> 
          <Col xs={3}> <FontAwesomeIcon icon="gear" /></Col>
      </Container>
    </Navbar>
  );
}
