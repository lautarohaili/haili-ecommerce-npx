function ItemDetail({ prods }) {
  return (
    <div>
      <img src={prods.url} alt="imagen" style={{ width: "400px" }} />
      <p>{prods.name}</p>
      <p>{prods.price}</p>
      <p>{prods.categoria}</p>
    </div>
  );
}

export default ItemDetail;
