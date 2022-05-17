import Item from "./Item";

function ItemDetail({ prods }) {
  return (
    <>
      <>
        {prods.map((prod) => (
          <Item key={prod.id} prod={prod} />
        ))}
      </>
    </>
  );
}

export default ItemDetail;
