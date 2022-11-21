import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function MobileDashboardNav(props) {
  const { pathname } = useRouter();
  console.log("here");
  return (
    <Navbar bg="primary" fixed="bottom" variant="dark" className="py-4">
      <Container style={{ textAlign: "center", color: "white" }}>
        <Col xs={3}>
          <a href="/dashboard">
            <FontAwesomeIcon icon="home" />
          </a>
        </Col>
        <Col xs={3}>
          <a href="/dashboard/tanks">
            <FontAwesomeIcon icon="fish" />
          </a>
        </Col>
        <Col xs={3}>
        <a href="#">
          <FontAwesomeIcon icon="tools" />
          </a>
        </Col>
        <Col xs={3}>
        <a href="#">
          <FontAwesomeIcon icon="gear" />
          </a>
        </Col>
      </Container>
    </Navbar>
  );
}
