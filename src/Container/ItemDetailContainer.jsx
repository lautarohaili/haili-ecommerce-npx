import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Componentes/Items/ItemDetail";
import Loading from "../Componentes/Loading/Loading";
import getItemOne from "../Componentes/helpers/getItemOne";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);
  const { detalleId } = useParams();

  useEffect(() => {
    if (detalleId) {
      getItemOne
        .then((data) =>
          setProds(data.filter((prod) => prod.detalle === detalleId))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getItemOne
        .then((data) => setProds(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [detalleId]);

  /* useEffect(() => {
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
  }, [detalleId]); */

  /*
  useEffect(() => {
    setTimeout(() => {
      getItemOne
        .then((response) => response.json())
        .then((prods) => prods.find((prod) => prod.detalleId === detalleId))
        .then((data) => setProductos(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 2000);
  }, [detalleId]); */

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <ItemDetail prods={prods} />
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;
