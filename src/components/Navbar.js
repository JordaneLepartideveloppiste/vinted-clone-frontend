import logo from "../assets/img/logo_vinted.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/components/Navbar.scss"
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalCo from "./ModalCo";



const Navbar = ({userToken, setUser}) => {

const [showModal, setShowModal] = useState(false);
const [modalOnLogin, setModalOnLogin] = useState(false);
const [searchInput, setSearchInput] = useState("Rechercher des articles")

const handleChange = (e) => {
  setSearchInput(e.target.value);
}
const handleClick = () => {
  setSearchInput("");
}
  
  
    return (
      <div className="navbar">
        <div className="navbar_content">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo_vinted" />
            </Link>
          </div>
          <div className="search">
            <FontAwesomeIcon icon="search" color="rgb(76, 76, 76)" />
            <input
              type="text"
              id="search_input"
              value={searchInput}
              onChange={handleChange}
              onClick={handleClick}
            />
          </div>
          <div className="connexion">
            {userToken ? (
              <button
                id="logout_btn"
                onClick={() => {
                  setUser(null);
                }}
              >
                Se déconnecter
              </button>
            ) : (
              <>
                <button
                  id="signup_btn"
                  name="signup_btn"
                  onClick={() => {
                    setShowModal(true);
                    setModalOnLogin(false);
                  }}
                >
                  S'inscrire
                </button>
                <button
                  id="login_btn"
                  name="login_btn"
                  onClick={() => {
                    setShowModal(true);
                    setModalOnLogin(true);
                  }}
                >
                  Se Connecter
                </button>
                {showModal && (
                  <ModalCo
                    setShowModal={setShowModal}
                    setModalOnLogin={setModalOnLogin}
                    modalOnLogin={modalOnLogin}
                    setUser={setUser}
                  />
                )}
              </>
            )}
          </div>
          <button id="sale_now_btn1">Vends maintenant</button>
        </div>
      </div>
    );
};

export default Navbar;