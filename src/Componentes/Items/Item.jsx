import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount/itemCount";

function Item({ prod }) {
  return (
    <>
      <Card className="" style={{ width: "18rem" }}>
        <Link className="nav-link" to={`detail/${prod.id}`}>
          <Card.Img variant="top" src={prod.url} />
          <Card.Body>
            <Card.Title>{`${prod.name} - ${prod.categoria}`}</Card.Title>
            <Card.Text>{prod.price}</Card.Text>
          </Card.Body>
        </Link>
        <div className="card-footer">
          <div>
            <ItemCount stock={10} initial={1} />
          </div>
        </div>
      </Card>
    </>
  );
}

export default Item;
