import React, { useState, useEffect } from "react";
import ItemList from "../Componentes/Items/ItemList";
import Loading from "../Componentes/Loading/Loading";
import getItem from "../Componentes/helpers/getItem";

function ItemListContainer({ saludo }) {
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);

  useEffect(() => {
    getItem
      .then((data) => setProds(data))
      .catch((err) => console.error(`error: ${err}`))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div>{saludo}</div>

      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <ItemList prods={prods} />
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
