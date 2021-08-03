import { Link } from "react-router-dom";
import "../assets/css/components/Header.scss"
import scrap from "../assets/img/banner_scrape.png"


const Header = ({userToken, showModal, setShowModal, modalOnLogin, setModalOnLogin}) => {
  
  console.log({userToken});

    return (
      <div className="header">
        <div className="header_content">
          <div className="starting_block">
            <span id="ready">Prêt à faire du tri dans vos placards ?</span>
            {userToken ? (
              <Link to="/publish">
                <button id="start">Vends maintenant</button>
              </Link>
            ) : (
              <button
                id="start"
                onClick={() => {
                  setShowModal(true);
                  setModalOnLogin(true);
                }}
              >
                Vends maintenant
              </button>
            )}

            <span id="discover">Découvrir comment ça marche</span>
          </div>
        </div>
        <img src={scrap} alt="scrap_bottom" />
      </div>
    );
};

export default Header;