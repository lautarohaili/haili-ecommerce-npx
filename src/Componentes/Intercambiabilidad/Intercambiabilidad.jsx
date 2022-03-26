import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../Items/ItemCount/itemCount";
import Widget from "../Widget/Widget";
import "../Intercambiabilidad/Intercambiabilidad.css";

const InputCount = () => {
  return (
    <>
      <div>
        <Button
          className="botonCarrito"
          variant="outline-primary"
          onClick={() => console.log("ir a cart")}
        >
          <Link className=" nav-link" to="/carrito">
            Ir al Carrito
          </Link>
        </Button>
        <Button className="botonCarrito" variant="outline-primary">
          <Link className=" nav-link" to="/">
            Finalizar Compra
          </Link>
        </Button>
      </div>
    </>
  );
};

const ButtonCount = ({ handleInter }) => {
  return (
    <button
      className="botonCarrito btn btn-outline-success"
      onClick={handleInter}
    >
      <Widget />
    </button>
  );
};

const Intercambiabilidad = () => {
  const [inputType, setInputType] = useState("button");

  const handleInter = () => {
    setInputType("input");
  };

  return (
    <div>
      {inputType === "button" ? (
        <>
          <br />
          <ButtonCount handleInter={handleInter} />
        </>
      ) : (
        <InputCount />
      )}
    </div>
  );
};

export default Intercambiabilidad;
