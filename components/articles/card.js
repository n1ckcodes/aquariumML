import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ArticleCard({header, title, blurb}) {

  return (
    <Card
    bg={"light"}
    key={"light"}
    text={"dark"}
  >
    <Card.Header>{header}</Card.Header>
    <Card.Body>
      <Card.Title> {title} </Card.Title>
      <Card.Text>
        {blurb}
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default ArticleCard;