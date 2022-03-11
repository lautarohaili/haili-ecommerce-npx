import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer";
import ItemCount from "./Componentes/itemCount";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo="Hola soy la nueva App" />
      <ItemCount />
    </div>
  );
}

export default App;
