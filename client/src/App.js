import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Nabvar';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Detailed from './components/Detailed/Detailed';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/details/:id">
          <Detailed />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
        {/*//! no poner ruta search */}
      </Switch>
    </Router>
  );
}

export default App;
