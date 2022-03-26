import { Button, Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContex";

import "./Item.css";

export default function Item({}) {
  const { prodCat } = useCartContext();
  const { categoria } = useParams();
  const product = prodCat(categoria);

  return (
    <>
      {product.map((prod) => (
        <Card className="" style={{ width: "18rem" }}>
          <div className="img-contenedor">
            <img src={prod.url} alt="Producto" className="prod-img" />
          </div>
          <div className="tit-contenedor">
            <h3>{`${prod.marca} - ${prod.modelo}`}</h3>
            <h4>${prod.precio}</h4>
          </div>
          <Link to={`/detalle/${prod.id}`} key={prod.id}>
            <div>
              <Button className="btn btn-outline-primary btn-block">
                Detalles del Producto
              </Button>
            </div>
          </Link>
        </Card>
      ))}
    </>
  );
}
