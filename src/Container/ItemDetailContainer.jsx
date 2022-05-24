import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Componentes/Items/ItemDetail/ItemDetail";
import Loading from "../Componentes/Loading/Loading";
import getItemOne from "../helpers/getItemOne";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState([]);
  const { detalleId } = useParams();

  useEffect(() => {
    getItemOne(detalleId) // fetch llamada a una api
      .then((respuesta) => setProducto(respuesta))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <ItemDetail item={producto} />
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;
/* useEffect(() => {
            if (detalleId) {
              getItemOne
                .then((setProds) => setProds.find((prod) => prod.detalle === detalleId))
                // .then((data) =>
                // setProds(data.find((prod) => prod.detalle === detalleId))
                // )
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
            } else {
              getItemOne
                .then((data) => setProds(data))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
            }
          }, [detalleId]);
        
          useEffect(() => {
            setTimeout(() => {
              fetch(getItemOne)
                .then((response) => response.json())
                .then((setProds) => setProds.find((prod) => prod.detalle === detalleId))
                .then((data) => setProds(data))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
            }, 5000);
          }, [detalleId]);*/
