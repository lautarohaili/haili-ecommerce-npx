import ItemDetail from "../Componentes/Items/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useCartContext } from "../Componentes/Context/CartContex";
import { Triangle } from "react-loader-spinner";

export default function ItemDetailContainer({ title }) {
  const { loading, prodId } = useCartContext();
  const { id } = useParams();

  return (
    <>
      {loading ? (
        <>
          <div className="my-3">
            <h2 className="titulo">{title}</h2>
          </div>
          <div className="loadProd">
            <Triangle color="#1a1a40" height={100} width={100} />
          </div>
        </>
      ) : (
        <>
          <div className="my-3"></div>
          <h2 className="titulo">{prodId(id).cat}</h2>
          <ItemDetail />
        </>
      )}
    </>
  );
}
