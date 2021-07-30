import logo from "../assets/img/logo_vinted.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/components/Navbar.scss"
import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import ModalCo from "./ModalCo";


const Navbar = ({userToken, setUser}) => {

const [showModal, setShowModal] = useState(false);

    

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
              <button
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
                  onClick={(e) => {
                    setShowModal(true)
                  }}
                >
                  S'inscrire
                </button>

                <button
                  id="login_btn"
                  name="login_btn"
                  onClick={(e) => {setShowModal(true)}}
                >
                  Se Connecter
                </button>
                { 
                showModal && <ModalCo setShowModal={setShowModal} showModal={showModal} setUser={setUser} />    
                }
                    
                }

                <Link to="/login">Se connecter</Link>
                <Link to="/signup">S'inscrire</Link>
              </>
            )}
        
            }
          </div>
          <button id="sale_now_btn1">Vends maintenant</button>
        </div>
      </div>
    );
};

export default Navbar;