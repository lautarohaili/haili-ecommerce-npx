import NavBar from "./Componentes/NavBar/NavBar";
import { CartContextProvider } from "./Componentes/Context/CartContex";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import ItemListContainer from "./Container/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer";
import Carrito from "./Componentes/Carrito/Carrito";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer title="Bienvenidos" />}
            />
            <Route
              path="/categorias/:categoria"
              element={<ItemListContainer saludo="hola soy ItemListContiner" />}
            />
            <Route
              path="/detalle/:id"
              element={<ItemDetailContainer title="Productos" />}
            />
            <Route path="/cart" element={<Carrito title="Detalle Compra" />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
