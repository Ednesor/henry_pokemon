import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Pagina de inicio</h1>
        </Route>
        <Route path="/home">
          <h1>Home con las cards y los filtros</h1>
        </Route>
        <Route path="/create">
          <h1>Crear pokemon</h1>
        </Route>
        <Route path="/details/:id">
          <h1>detalles</h1>
        </Route>
        <Route path="*">
          <h1>Error, la pagina no existe :(</h1>
        </Route>
        {/*//! no poner ruta search */}
      </Switch>
    </Router>
  );
}

export default App;
