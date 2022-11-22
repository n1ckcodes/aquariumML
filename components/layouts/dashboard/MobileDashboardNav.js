import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
export default function MobileDashboardNav(props) {
  const { pathname } = useRouter();
  console.log("here");
  return (
    <Nav
      className="flex-column"
      style={{
        backgroundColor: "#d0cfcf",
        height: "100%",
        textAlign: "center",
      }}
    >
      <Nav.Link href="/dashboard">
        <FontAwesomeIcon icon="home" />
      </Nav.Link>
      <Nav.Link href="/dashboard/tanks">
        <FontAwesomeIcon icon="note-sticky" />
      </Nav.Link>
      <Nav.Link href="/dashboard/tools">
        <FontAwesomeIcon icon="tools" />
      </Nav.Link>
      <Nav.Link href="/dashboard/settings">
        <FontAwesomeIcon icon="gear" />
      </Nav.Link>
    </Nav>
  );
}
