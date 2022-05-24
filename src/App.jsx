import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CartProvider from "./Context/CartContext";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
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
              path="/detail/:detalleId"
              element={<ItemDetailContainer />}
            />
            <Route path="/carrito" element={<CartPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
