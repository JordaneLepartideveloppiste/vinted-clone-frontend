import "../assets/css/components/Header.scss"
import scrap from "../assets/img/banner_scrape.png"


const Header = () => {
    return (
      <div className="header">
        <div className="header_content">
          <div className="starting_block">
            <span id="ready">Prêt à faire du tri dans vos placards ?</span>
            <button id="start">Vends maintenant</button>
            <span id="discover">Découvrir comment ça marche</span>
          </div>
        </div>
        <img src={scrap} alt="scrap_bottom" />
      </div>
    );
};

export default Header;