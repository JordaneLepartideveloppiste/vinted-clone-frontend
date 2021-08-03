
import "./App.scss";
import Home from "./containers/Home";
import Offer from "./containers/Offer";import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch, faHeart, faShieldAlt, faBars, faMinusCircle, faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Cookies from "js-cookie";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";
import PaymentSucceeded from "./containers/PaymentSucceeded";
library.add(faSearch, faHeart, faShieldAlt, faBars, faMinusCircle, faPlusCircle);


function App() {

  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [showModal, setShowModal] = useState(false);
  const [modalOnLogin, setModalOnLogin] = useState(false);

  const setUser = (token) => {
    Cookies.set("userToken", token, { expires: 30 });
    setUserToken(token);
  };
  
  return (
    <Router>
      <Navbar
        setUser={setUser}
        userToken={userToken}
        setShowModal={setShowModal}
        setModalOnLogin={setModalOnLogin}
        showModal={showModal}
        modalOnLogin={modalOnLogin}
      />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/publish">
          <Publish userToken={userToken} />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/success">
          <PaymentSucceeded />
        </Route>
        <Route path="/">
          <Home
            userToken={userToken}
            setShowModal={setShowModal}
            setModalOnLogin={setModalOnLogin}
            showModal={showModal}
            modalOnLogin={modalOnLogin}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
