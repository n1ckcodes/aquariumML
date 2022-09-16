
import Layout from './master'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DashboardNav from './dashboard/dashboardNav';
export default function MaintenanceDashboard({ children, user }) {
  return (
    <Layout user={user}>   <Container fluid>
    <Row>
        <Col xs={3} md={2}><DashboardNav /></Col>
        <Col>2 of 3 (children)</Col>
      </Row>

  </Container></Layout>
  );
}
