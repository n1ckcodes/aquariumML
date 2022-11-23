import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function MobileDashboardNav(props) {
  const { pathname } = useRouter();
  console.log("here");
  return (
      <Row style={{textAlign:"center", paddingTop:"3vh", paddingBottom:"3vh", marginBottom:"3vh", border:"thin solid black"}}>
        <Col xs={3}>
      <Nav.Link href="/dashboard">
        <FontAwesomeIcon icon="home" />
      </Nav.Link>
      </Col>
      <Col xs={3}>
      <Nav.Link href="/dashboard/tanks">
        <FontAwesomeIcon icon="note-sticky" />
      </Nav.Link>
      </Col>
      <Col xs={3}>
      <Nav.Link href="/dashboard/tools">
        <FontAwesomeIcon icon="tools" />
      </Nav.Link>
      </Col>
      <Col xs={3}>
      <Nav.Link href="/dashboard/settings">
        <FontAwesomeIcon icon="gear" />
      </Nav.Link>
      </Col>
      </Row>
  );
}
