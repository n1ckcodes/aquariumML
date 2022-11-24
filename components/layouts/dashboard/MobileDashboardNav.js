import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function MobileDashboardNav(props) {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <Row style={{ textAlign: "center", height: "6vh" }}>
      <Col
        xs={3}
        style={{
          background:
            pathname == "/dashboard/home" || pathname == "/dashboard"
              ? "blue"
              : "white",
          borderRight: "thin solid lightgray",
          borderBottom: "thin solid lightgray",
        }}
      >
        <Nav.Link
          href="/dashboard"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon="home" />
        </Nav.Link>
      </Col>
      <Col
        xs={3}
        style={{
          background:
            pathname == "/dashboard/tanks"
              ? "blue"
              : "white",
          borderRight: "thin solid lightgray",
          borderBottom: "thin solid lightgray",
        }}
      >
        <Nav.Link
          href="/dashboard/tanks"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon="note-sticky" />
        </Nav.Link>
      </Col>
      <Col
        xs={3}
        style={{
          background:
            pathname == "/dashboard/tools" 
              ? "blue"
              : "white",
          borderRight: "thin solid lightgray",
          borderBottom: "thin solid lightgray",
        }}
      >
        <Nav.Link
          href="/dashboard/tools"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon="tools" />
        </Nav.Link>
      </Col>
      <Col
        xs={3}
        style={{
          background:
            pathname == "/dashboard/settings" 
              ? "blue"
              : "white",
          borderRight: "thin solid lightgray",
          borderBottom: "thin solid lightgray",
        }}
      >
        <Nav.Link
          href="/dashboard/settings"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon="gear" />
        </Nav.Link>
      </Col>
    </Row>
  );
}
