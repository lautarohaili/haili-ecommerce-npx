import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getItemOne from "../Componentes/helpers/getItemOne";
import ItemList from "../Componentes/Items/ItemList";
import Loading from "../Componentes/Loading/Loading";

function ItemListContainer({ saludo }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getItemOne()
        .then((respuesta) =>
          setProductos(respuesta.filter((prods) => prods.categoria === id))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getItemOne()
        .then((respuesta) => setProductos(respuesta))
        .finally(() => setLoading(false));
    }
  }, [id]);

  return (
    <>
      <div>{saludo}</div>

      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <ItemList productos={productos} />
        </div>
      )}
    </>
  );
}

export default ItemListContainer;

/* useEffect(() => {
  if (id) {
    getItemOne
      .then((data) => setProds(data.filter((prod) => prod.categoria === id)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  } else {
    getItemOne
      .then((data) => setProds(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }
}, [id]); */
