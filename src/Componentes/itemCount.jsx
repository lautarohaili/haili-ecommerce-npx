import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Widget from "./Widget/Widget";
import swal from "sweetalert";
import "../Componentes/itemCount.css";

function ItemCount({}) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    return () => {};
  });

  if (count == 0) {
    return alert("La cantidad no puede ser menor a 1");
  }

  const restaCount = () => {
    setCount(count - 1);
  };

  const sumaCount = () => {
    setCount(count + 1);
  };

  const mostrarAlerta = () => swal("Agregado al Carrito !");

  return (
    <>
      <h4>Nuevo Producto</h4>
      <Button
        className="botones"
        variant="outline-primary"
        onClick={restaCount}
      >
        {" - "}
      </Button>
      <label>{count}</label>
      <Button className="botones" variant="outline-primary" onClick={sumaCount}>
        {" + "}
      </Button>
      <div>
        <Button
          className="botonCarrito"
          variant="outline-success"
          onClick={() => mostrarAlerta()}
        >
          <Widget />
        </Button>
      </div>
    </>
  );
}

export default ItemCount;
