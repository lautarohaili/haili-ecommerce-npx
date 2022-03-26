import { useCartContext } from "../../Context/CartContex";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BsDashLg, BsPlusLg } from "react-icons/bs";

import "../ItemCount/itemCount.css";

export default function ItemCount() {
  const {
    contador,
    btn,
    inCart,
    carrito,
    clickAumentar,
    clickDisminuir,
    addCart,
  } = useCartContext();

  const { id } = useParams();
  const isInCart = carrito.find((prod) => prod.id === id);

  localStorage.setItem("carrito", JSON.stringify(carrito));
  return (
    <>
      {btn === "addCart" && !isInCart ? (
        <>
          <div className="contador">
            <BsDashLg
              className="disminuir"
              data-id={id}
              onClick={clickDisminuir}
            />
            <label className="contadorItem">{contador}</label>
            <BsPlusLg
              className="aumentar"
              data-id={id}
              onClick={clickAumentar}
            />
          </div>
          <div className="btn-item">
            <Button variant="outline-info" data-id={id} onClick={addCart}>
              Agregar a carrito
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="btn-item">
            <Link to="/cart">
              <Button variant="outline-success" onClick={inCart}>
                Finalizar compra
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline-secondary" onClick={inCart}>
                Seguir comprando
              </Button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
