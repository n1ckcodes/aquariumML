import Layout from "./master";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DashboardNav from "./dashboard/dashboardNav";
export default function MaintenanceDashboard({ children, user }) {
  return (
    <Layout>
      {" "}
      <Container fluid>
        <Row>
          <Col  xs={3} sm={3} md={3} lg={4} xl={1}>
            <DashboardNav />
          </Col>
          <Col>{children}</Col>
        </Row>
      </Container>
    </Layout>
  );
}
