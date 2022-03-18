import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo="hola soy ItemListContiner" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
