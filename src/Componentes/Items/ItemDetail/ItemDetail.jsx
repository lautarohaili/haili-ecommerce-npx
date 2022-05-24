import React, { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import ItemCount from "../ItemCount/itemCount";
import "../ItemDetail/ItemDetail.css";

const ItemDetail = ({ item }) => {
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  const onAdd = (qty) => {
    addToCart(item, qty);
  };

  return (
    <div className="producto-detail">
      <img src={item.url} alt="imagen" className="product-detail__img" />
      <div className="producto-detail-info">
        <h2 className="name">{item.name}</h2>
        <p className="description">{item.description}</p>
        <ul className="info-grid">
          <li>Precio:</li>
          <li>${item.price}</li>
          <li>Stock:</li>
          <li>{item.stock}</li>
        </ul>
        <ItemCount stock={item.stock} item={item} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
