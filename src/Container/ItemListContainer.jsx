import React, { useState, useEffect } from "react";
import getItem from "../Componentes/helpers/getItem";
import Item from "../Componentes/Item";
import Loading from "../Componentes/Loading/Loading";

function ItemListContainer({ saludo }) {
  const [loading, setLoading] = useState(true);
  const [productos, setProds] = useState([]);

  useEffect(() => {
    getItem
      .then((data) => setProds(data))
      .catch((err) => console.error(`error: ${err}`))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div>{saludo}</div>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="container">
            {productos.map((prod) => (
              <div className="col-md-4 mb-5" key={prod.id}>
                <Item prod={prod} loading={loading} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ItemListContainer;
