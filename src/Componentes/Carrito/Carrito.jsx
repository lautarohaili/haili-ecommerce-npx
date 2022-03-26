import React from "react";
import { CartProvider, useCartContext } from "../Contex/CartContex";

function Carrito() {
  const { cartItems } = CartProvider(useCartContext);
  return (
    <div>
      {cartItems.map((prod) => (
        <div>
          <li>Categoria: {prod.categoria}</li>
          <li> Modelo: {prod.name}</li>
          <li> Precio Unitario: ${prod.price}</li>
          <li> Cantidad: {prod.cantidad}</li>
        </div>
      ))}
    </div>
  );
}

export default Carrito;
