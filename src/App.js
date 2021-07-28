
import "./App.scss";
import Home from "./containers/Home";
import Offer from "./containers/Offer";import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch, faHeart
} from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faHeart);


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
