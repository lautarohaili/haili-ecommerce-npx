import { useState, useEffect } from "react";
import getFetch from "../Componentes/helpers/getFetch";
import ItemList from "../Componentes/Items/ItemList";
import Loading from "../Componentes/Loading/Loading";
import { useParams } from "react-router-dom";

function ItemListContainer({ saludo }) {
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getFetch
        .then((response) =>
          setProds(response.filter((prod) => prod.categoria === id))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getFetch
        .then((response) => setProds(response))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  console.log(prods);
  console.log(id);

  return (
    <>
      <center>
        <div>{saludo}</div>

        {loading ? (
          <Loading />
        ) : (
          <>
            <ItemList prods={prods} />
          </>
        )}
      </center>
    </>
  );
}

export default ItemListContainer;
