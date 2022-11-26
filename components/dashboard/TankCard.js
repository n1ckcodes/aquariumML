import Card from 'react-bootstrap/Card';
export default function TankCard({ Tank }) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="/images/hero5.jpg" />
    <Card.Body>
      <Card.Title>{Tank.Name}</Card.Title>
      <Card.Text>
        Some dummy info about the tank
      </Card.Text>
    </Card.Body>
  </Card>
  )
}
