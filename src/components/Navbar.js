import logo from "../assets/img/logo_vinted.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/components/Navbar.scss"

const Navbar = () => {



    return (
      <div className="navbar">
        <div className="navbar_content">
          <img src={logo} alt="logo_vinted" />
          <div className="search">
            <FontAwesomeIcon icon="search" color="darkgray" />
            <input type="text" id="search_input" value="Rechercher des articles"/>
          </div>
          <div className="connexion">
              <button id="signup_btn">S'inscrire</button>
              <button id="signin_btn">Se Connecter</button>
          </div>
          <button id="sale_now_btn1">Vends maintenant</button>

        </div>
      </div>
    );
};

export default Navbar;