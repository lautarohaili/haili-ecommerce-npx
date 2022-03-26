import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item({ prod }) {
  return (
    <>
      <Card className="" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.url} />
        <Card.Body>
          <Card.Title>{`${prod.name} - ${prod.categoria}`}</Card.Title>
          <Card.Text>{prod.price}</Card.Text>
        </Card.Body>
        <Link className="nav-link" to={`/detalle/${prod.id}`} key={prod.id}>
          <div>
            <Button className="btn btn-outline-primary btn-block">
              Detalles del Producto
            </Button>
          </div>
        </Link>
      </Card>
    </>
  );
}

export default Item;
