import "../assets/css/components/Header.scss"
import { Link } from "react-router-dom"


const Header = () => {
    return (
      <div className="header">
        <div className="header_content">
          <div className="starting_block">
            <span id="ready">Prêt à faire du tri dans vos placards ?</span>
            <Link>
              <button id="start">Vends maintenant</button>
            </Link>
                <span id="discover">Découvrir comment ça marche</span>
            
          </div>
        </div>
      </div>
    );
};

export default Header;