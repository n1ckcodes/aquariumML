import Layout from "./MasterLayout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DashboardNav from "./dashboard/DashboardNav";
export default function MaintenanceDashboard({ children, user }) {
  return (
    <Layout>
      {" "}
        <Row>
          <Col  xs={5} sm={2} md={3} lg={4} xl={1}>
            <DashboardNav />
          </Col>
          <Col>{children}</Col>
        </Row>
    </Layout>
  );
}
