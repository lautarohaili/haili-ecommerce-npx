import { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "./ItemCount/itemCount";

function Item({ prod }) {
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  const onAdd = (qty) => {
    addToCart(prod, qty);
  };

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
            <ItemCount
              item={prod}
              stock={prod.stock}
              initial={1}
              onAdd={onAdd}
            />
          </div>
        </div>
      </Card>
    </>
  );
}

export default Item;
