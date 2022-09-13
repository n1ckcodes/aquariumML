import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ArticleCard({thumbnail, title, blurb, tags}) {

  return (
    <Card style={{ width: '18rem', display:"inline-block" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {blurb}

         <br />
         {tags}
        </Card.Text>
        <Button  variant="outline-secondary" >Read more...</Button>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;