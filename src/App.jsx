import NavBar from "./Componentes/NavBar/NavBar";
import { CartProvider } from "./Componentes/Contex/CartContex";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import ItemListContainer from "./Container/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer";
import Carrito from "./Componentes/Carrito/Carrito";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer saludo="hola soy ItemListContiner" />}
            />
            <Route
              path="/categoria/:id"
              element={<ItemListContainer saludo="hola soy ItemListContiner" />}
            />
            <Route
              path="/detalle/:detailId"
              element={<ItemDetailContainer />}
            />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
