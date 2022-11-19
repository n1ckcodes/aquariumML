import Layout from "../MasterLayout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DashboardNavController from "components/layouts/dashboard/DashboardNavController";
export default function MaintenanceDashboard({ children, user }) {
  return (
    <Layout>
      <Row style={{height:"100%"}}>
        <Col xs={5} sm={2} md={3} lg={4} xl={1}>
          <DashboardNavController />
        </Col>
        <Col>{children}</Col>
      </Row>
    </Layout>
  );
}
