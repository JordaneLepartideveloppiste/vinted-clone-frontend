
import "./App.scss";
import Home from "./containers/Home";
import Offer from "./containers/Offer";import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch, faHeart
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Cookies from "js-cookie";
library.add(faSearch, faHeart);


function App() {

  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    Cookies.set("userToken", token, { expires: 30 });
    setUserToken(token);
  };
  
  return (
    <Router>
      <Navbar setUser={setUser} userToken={userToken}/>
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
