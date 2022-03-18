import { useEffect, useState } from "react";
import ItemDetail from "../Componentes/Items/ItemDetail";
import getItem from "../Componentes/helpers/getItem";
import Loading from "../Componentes/Loading/Loading";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [producto, setProductos] = useState({});

  useEffect(() => {
    getItem
      .then((resp) => setProductos(resp.find((prod) => prod.id === 1)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  console.log(producto);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <ItemDetail producto={producto} />
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;
