import Button from "react-bootstrap/Button";
import { useState } from "react";
import Widget from "../../Widget/Widget";
import swal from "sweetalert";
import "./itemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const agregar = () => {
    swal("Agregado al Carrito !");
    onAdd(count);
  };

  return (
    <>
      <Button className="botones" variant="outline-primary" onClick={restar}>
        {" - "}
      </Button>
      <label>{count}</label>
      <Button className="botones" variant="outline-primary" onClick={sumar}>
        {" + "}
      </Button>
      <div>
        <Button
          className="botonCarrito"
          variant="outline-success"
          onClick={agregar}
        >
          <Widget />
        </Button>
      </div>
    </>
  );
}

export default ItemCount;
