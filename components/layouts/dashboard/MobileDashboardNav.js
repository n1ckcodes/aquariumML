import { useRouter } from "next/router";
import Link from "next/link";
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
        <Link href="/dashboard">
          <a className={styles.mobileNavBtn}>
            <FontAwesomeIcon icon="home" />
          </a>
        </Link>
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
        <Link href="/dashboard/tanks">
          <a className={styles.mobileNavBtn}>
            <FontAwesomeIcon icon="note-sticky" />
          </a>
        </Link>
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
        <Link href="/dashboard/tools">
          <a className={styles.mobileNavBtn}>
            <FontAwesomeIcon icon="tools" />
          </a>
        </Link>
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
        <Link href="/dashboard/settings">
          <a className={styles.mobileNavBtn}>
            <FontAwesomeIcon icon="gear" />
          </a>
        </Link>
      </Col>
    </Row>
  );
}
