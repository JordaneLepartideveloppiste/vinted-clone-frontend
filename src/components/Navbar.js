import logo from "../assets/img/logo_vinted.jpeg"
import "../assets/css/components/Navbar.scss"
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalCo from "./ModalCo";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const Navbar = ({userToken, setUser, showModal, setShowModal, modalOnLogin, setModalOnLogin}) => {



const [searchInput, setSearchInput] = useState("Rechercher des articles");





const handleChange = (e) => {
  setSearchInput(e.target.value);
};
const handleClick = () => {
  setSearchInput("");
};
  
  
    return (
      <>
        <div className="navbar">
          <div className="navbar_content">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo_vinted" />
              </Link>
            </div>
            <SearchBar className="sb_in_navbar" />
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
            {userToken ? (
              <Link to="/publish">
                <button id="sale_now_btn1">Vends maintenant</button>
              </Link>
            ) : (
              <button id="sale_now_btn1" onClick = {() => {setShowModal(true);
              setModalOnLogin(true);}}>Vends maintenant</button>
            )}

            <FontAwesomeIcon
              icon="bars"
              className="menu_burger"
              color="rgba(76, 76, 76, 0.6)"
            />
          </div>
          <div className="sub_navbar">
            <div className="sub_navbar_content">
              <div className="sb_in_subnavbar">
                <FontAwesomeIcon
                  icon="search"
                  color="rgba(76, 76, 76, 0.6)"
                  className="search_icon"
                />
                <input
                  type="text"
                  className="search_input"
                  value={searchInput}
                  onChange={handleChange}
                  onClick={handleClick}
                />
              </div>
              <button>Femmes</button>
              <button>Hommes</button>
              <button>Enfants</button>
              <button>Maison</button>
              <button>À propos</button>
              <button>Notre Plateforme</button>
            </div>
          </div>
        </div>
      </>
    );
};

export default Navbar;