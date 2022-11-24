import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Nav, Row, Col} from "react-bootstrap";

export default function MobileDashboardNav() {
  const { pathname } = useRouter();
  return (
    <Row style={{ textAlign: "center", height: "6vh" }}>
      <Col
        xs={3}
        style={{
          background:
            pathname == "/dashboard/home" || pathname == "/dashboard"
              ? "#0096FF"
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
          background: pathname == "/dashboard/tanks" ? "#0096FF" : "white",
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
          background: pathname == "/dashboard/tools" ? "#0096FF" : "white",
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
          background: pathname == "/dashboard/settings" ? "#0096FF" : "white",
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
