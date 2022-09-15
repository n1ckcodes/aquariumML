
import Layout from './master'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function MaintenanceDashboard({ children, user }) {
  return (
    <Layout> <Container>

    <Row xs={1} md={2}>
      <Col>1 of 3</Col>
      <Col>   {children}</Col>
      <Col>3 of 3</Col>
    </Row>

  </Container></Layout>
  );
}
