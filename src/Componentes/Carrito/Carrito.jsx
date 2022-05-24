import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../Items/CartItem/CartItem";

import "../Carrito/Carrito.css";

const Carrito = () => {
  const cartContext = useContext(CartContext);
  const { cart, deleteCart } = cartContext;

  return (
    <section className="list-cart-container">
      {cart ? (
        cart.map((product) => <CartItem key={product.id} item={product} />)
      ) : (
        <p>cargando productos</p>
      )}
      {cart.length ? (
        <button className="button-primary button-padding" onClick={deleteCart}>
          Vaciar Carrito
        </button>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </section>
  );
};

export default Carrito;
