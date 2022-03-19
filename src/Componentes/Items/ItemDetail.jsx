function ItemDetail({ producto }) {
  return (
    <div>
      <img src={producto.url} alt="imagen" style={{ width: "400px" }} />
      <p>{producto.name}</p>
      <p>{producto.price}</p>
      <p>{producto.categoria}</p>
    </div>
  );
}

export default ItemDetail;
