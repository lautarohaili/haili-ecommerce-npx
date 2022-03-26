import { useState, useEffect } from "react";
import getFetch from "../Componentes/helpers/getFetch";
import ItemDetail from "../Componentes/Items/ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../Componentes/Loading/Loading";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);
  const { detailId } = useParams();

  useEffect(() => {
    getFetch
      .then((response) =>
        setProds(response.find((prod) => prod.id === detailId))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [detailId]);

  console.log(prods);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <ItemDetail prod={prods} />
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;
