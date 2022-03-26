import { useContext } from "react";
import { useCartContext } from "../Contex/CartContex";
import { electronica } from "../helpers/getFetch";
import Intercambiabilidad from "../Intercambiabilidad/Intercambiabilidad";
import ItemCount from "./ItemCount/itemCount";

const ItemDetail = () => {
  const { addItemToCart } = useContext(useCartContext);

  return (
    <div>
      {electronica.map((prod, i) => (
        <center>
          <div key={i} className="col-md-4">
            <div className="card w-125 mt-5">
              <div className="card-header">
                {`${prod.name} - ${prod.categoria}`}
              </div>

              <div className="card-body">
                <img src={prod.url} alt="" className="w-50" />
              </div>

              <div className="card-footer">{` ${prod.price}`}</div>
            </div>
          </div>
          <div>
            <ItemCount
              stock={10}
              initial={1}
              onClick={() => addItemToCart(prod)}
            />
            <Intercambiabilidad />
          </div>
        </center>
      ))}
    </div>
  );
};

export default ItemDetail;
