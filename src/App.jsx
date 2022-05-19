import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer";
import Carrito from "./Componentes/Carrito/Carrito";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Suspense>
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
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
