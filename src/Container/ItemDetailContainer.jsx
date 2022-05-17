import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Componentes/Items/ItemDetail";
import Loading from "../Componentes/Loading/Loading";
import getItemOne from "../Componentes/helpers/getItemOne";

function ItemDetailContainer() {
  const [prods, setProductos] = useState({});
  const [loading, setLoading] = useState(true);
  const { detalleId } = useParams();

  useEffect(() => {
    if (detalleId) {
      getItemOne
        .then((data) =>
          setProductos(data.filter((prods) => prods.id === detalleId))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getItemOne
        .then((data) => setProductos(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [detalleId]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <ItemDetail producto={prods} />
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;
