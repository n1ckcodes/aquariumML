import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ArticleCard({img, title, blurb}) {

  return (
    <Card style={{ width: '18rem', display:"inline-block" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {blurb}
        </Card.Text>
        <Button  variant="outline-secondary" >Read more...</Button>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;