import React from "react";

const CartItem = ({ item }) => {
  return (
    <article className="cart-item-card">
      <div className="cart-item__img">
        <img src={item.url} />
      </div>
      <div>
        <h2 className="cart-item__name">{item.name}</h2>
        <h3 className="cart-item__price">${item.price}</h3>
        <h3 className="cart-item__qty">
          <strong>Cantidad:</strong> {item.qty}
        </h3>
        <h3 className="cart-item__qty">
          <strong>Total:</strong> ${item.qty * item.price}
        </h3>
      </div>
    </article>
  );
};

export default CartItem;
