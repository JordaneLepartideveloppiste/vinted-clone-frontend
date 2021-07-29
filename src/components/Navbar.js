import logo from "../assets/img/logo_vinted.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/components/Navbar.scss"
import { useState } from "react";
import { Modal } from 'react-router-modal';
import ModalCo from "./ModalCo";

const Navbar = ({userToken}) => {

const [showModal, setShowModal] = useState(false);

const handleClick = () => {
    setShowModal(true);
}
const handleHide = () => {
    setShowModal(false);
}

    return (
      <div className="navbar">
        <div className="navbar_content">
          <img src={logo} alt="logo_vinted" />
          <div className="search">
            <FontAwesomeIcon icon="search" color="darkgray" />
            <input
              type="text"
              id="search_input"
              value="Rechercher des articles"
            />
          </div>
          <div className="connexion">
              {userToken ? (
                  <button>Se déconnecter</button>
              ) : (
                  <>
                <button id="signup_btn" onClick={handleClick}>
              S'inscrire
            </button>

            <button id="login_btn" onClick={handleClick}>
              Se Connecter
            </button>
            </>
              )}
            
            {showModal && (
              <Modal onHide={handleHide}>
                  <ModalCo />
              </Modal>
            )}
          </div>
          <button id="sale_now_btn1">Vends maintenant</button>
        </div>
      </div>
    );
};

export default Navbar;