import React, { createContext, useContext, useState, useEffect } from "react";
import { getFetch } from "../helpers/getFetch";

const carritoAlmacen = JSON.parse(localStorage.getItem("carrito")) || [];
const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);
export function CartContextProvider({ children }) {
  const [carrito, setCarrito] = useState(carritoAlmacen);
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [contador, setContador] = useState(1);
  const [btn, setBtn] = useState("addCart");

  useEffect(() => {
    setTimeout(() => {
      getFetch()
        .then((data) => setProductos(data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, 3000);
  }, []);

  const prodCat = (cat) => {
    if (cat) {
      return productos.filter((prod) => prod.cat === cat);
    } else {
      return productos;
    }
  };
  const prodId = (id) => {
    return productos.find((prod) => prod.id === id);
  };

  const clickAumentar = () => {
    contador < 10 ? setContador(contador + 1) : setContador(10);
  };

  const clickDisminuir = () => {
    contador > 1 ? setContador(contador - 1) : setContador(1);
  };

  const addCart = (e) => {
    setBtn("inCart");
    const id = e.target.dataset.id;
    const prodInCart = carrito.find((prod) => prod.id === id);
    const prod = prodId(id);

    if (prodInCart) {
      if (contador < prodInCart.stock) {
        prodInCart.cantidad += contador;
        prodInCart.stock -= contador;
      }
      setCarrito([...carrito]);
    } else {
      setCarrito([
        ...carrito,
        { ...prod, stock: prod.stock - contador, cantidad: contador },
      ]);
    }
    setContador(1);
  };

  const cantTotalProd = () => {
    const cantProd = carrito.map((prod) => prod.cantidad);
    return cantProd.reduce((acc, item) => acc + item, 0);
  };

  const limpiarCarrito = () => {
    localStorage.clear();
    setCarrito([]);
  };

  const removerItems = (e) => {
    const idProd = e.target.dataset.id;

    for (let i = carrito.length - 1; i >= 0; --i) {
      if (carrito[i].id === idProd) carrito.splice(i, 1);
    }
    setCarrito([...carrito]);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };
  const inCart = () => {
    setBtn("addCart");
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        productos,
        loading,
        btn,
        setBtn,
        contador,
        setContador,
        setCarrito,
        prodCat,
        prodId,
        cantTotalProd,
        limpiarCarrito,
        removerItems,
        clickAumentar,
        clickDisminuir,
        addCart,
        inCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
