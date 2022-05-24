import Button from "react-bootstrap/Button";
import { useState } from "react";
import swal from "sweetalert";
import "./itemCount.css";

function ItemCount({ stock, initial, item, onAdd }) {
  const [count, setCount] = useState(initial);

  function handleIncrease() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function handleDecrease() {
    if (count > initial) {
      setCount(count - 1);
    }
  }

  if (count == 0) {
    return alert("La cantidad no puede ser menor a 1");
  }

  //const onAdd = () => swal("Agregado al Carrito !");

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <Button
          className="count-container__button"
          variant="outline-primary"
          onClick={handleDecrease}
        >
          {" - "}
        </Button>
        <label>{count}</label>
        <Button
          className="count-container__button"
          variant="outline-primary"
          onClick={handleIncrease}
        >
          {" + "}
        </Button>
      </div>
      <Button
        className="button-primary"
        variant="outline-success"
        onClick={() => {
          onAdd(item, count);
        }}
      >
        Añadir al Carrito
      </Button>
    </div>
  );
}

export default ItemCount;
