import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Row, Col } from "react-bootstrap";
import styles from "./MobileDashboard.module.css";

export default function MobileDashboardNav() {
  const { pathname } = useRouter();
  return (
    <Row style={{ textAlign: "center", height: "6vh" }}>
      <Col
        xs={3}
        className={styles.mobileNavBtnWrapper}
        style={{
          background:
            pathname == "/dashboard/home" || pathname == "/dashboard"
              ? "#0096FF"
              : "white",
          borderRight: "thin solid lightgray",
          borderBottom: "thin solid lightgray",
          padding: "0px",
        }}
      >
        <Nav.Link href="/dashboard" className={styles.mobileNavBtn}>
          <FontAwesomeIcon icon="home" />
        </Nav.Link>
      </Col>
      <Col
        xs={3}
        className={styles.mobileNavBtnWrapper}
        style={{
          background: pathname == "/dashboard/tanks" ? "#0096FF" : "white",
          borderRight: "thin solid lightgray",
          borderBottom: "thin solid lightgray",
          padding: "0px",
        }}
      >
        <Nav.Link href="/dashboard/tanks" className={styles.mobileNavBtn}>
          <FontAwesomeIcon icon="note-sticky" />
        </Nav.Link>
      </Col>
      <Col
        xs={3}
        className={styles.mobileNavBtnWrapper}
        style={{
          background: pathname == "/dashboard/tools" ? "#0096FF" : "white",
          borderRight: "thin solid lightgray",
          borderBottom: "thin solid lightgray",
          padding: "0px",
        }}
      >
        <Nav.Link href="/dashboard/tools" className={styles.mobileNavBtn}>
          <FontAwesomeIcon icon="tools" />
        </Nav.Link>
      </Col>
      <Col
        xs={3}
        className={styles.mobileNavBtnWrapper}
        style={{
          background: pathname == "/dashboard/settings" ? "#0096FF" : "white",
          borderRight: "thin solid lightgray",
          borderBottom: "thin solid lightgray",
          padding: "0px",
        }}
      >
        <Nav.Link href="/dashboard/settings" className={styles.mobileNavBtn}>
          <FontAwesomeIcon icon="gear" />
        </Nav.Link>
      </Col>
    </Row>
  );
}
