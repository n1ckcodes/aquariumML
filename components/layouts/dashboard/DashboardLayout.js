import { useState, useEffect } from "react";
import Layout from "../MasterLayout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import DashboardNavController from "components/layouts/dashboard/DashboardNavController";
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

    console.log(mobileView);
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <Layout>
      <Row style={{ height: "100%" }}>
        {!mobileView ? (
          <Col sm={2} md={3} lg={4} xl={1}>
            <DesktopDashboardNav />
          </Col>
        ) : null}

        <Col>{children}</Col>
      </Row>
      {mobileView ? <MobileDashboardNav /> : <></>}
    </Layout>
  );
}
