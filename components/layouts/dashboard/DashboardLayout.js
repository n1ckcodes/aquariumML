import { useState, useEffect } from "react";
import Layout from "../MasterLayout";
import { Row, Col } from "react-bootstrap";
import DesktopDashboardNav from "./DesktopDashboardNav";
import MobileDashboardNav from "./MobileDashboardNav";

export default function MaintenanceDashboard({ children, user }) {
  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 600
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  console.log(user)
  return (
    <Layout user={user}>
      {mobileView ? <MobileDashboardNav /> : <></>}
      <Row style={{ height: "100%" }}>
        {!mobileView ? (
          <Col sm={2} md={3} lg={4} xl={1}>
            <DesktopDashboardNav />
          </Col>
        ) : null}

        <Col>{children}</Col>
      </Row>
    </Layout>
  );
}
