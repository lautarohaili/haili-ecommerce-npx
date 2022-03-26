import ItemList from "../Componentes/Items/ItemList";
import { useParams } from "react-router-dom";
import { useCartContext } from "../Componentes/Context/CartContex";
import { Triangle } from "react-loader-spinner";

export default function ItemListContainer({ title }) {
  const { loading } = useCartContext();
  const { categoria } = useParams();
  return (
    <>
      <center>
        <div className="my-3">
          {categoria ? (
            <h1 className="titulo">{categoria}</h1>
          ) : (
            <h1 className="titulo">{title}</h1>
          )}
        </div>
        {loading ? (
          <div className="loadProd">
            <Triangle color="#1a1a40" height={100} width={100} />
          </div>
        ) : (
          <>
            <ItemList />
          </>
        )}
      </center>
    </>
  );
}
