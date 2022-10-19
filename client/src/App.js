import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Navbar from './components/Navbar/Nabvar';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Detailed from './components/Detailed/Detailed';

function App() {
  const unsubscribe = store.subscribe(() => console.log(store.getState()))
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/details/:id">
            <Detailed />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
          {/*//! no poner ruta search */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
