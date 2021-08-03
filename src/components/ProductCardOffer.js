import SimpleImageSlider from "react-simple-image-slider";
import "../assets/css/components/ProductCardOffer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import relay from "../assets/img/mondial_relay.png";
import ups from "../assets/img/ups.png";
import { Link, useHistory } from "react-router-dom";

const ProductCardOffer = ({
  image,
  price,
  details,
  name,
  description,
  owner,
  pictures,
}) => {
  const images = [];

  for (let i = 0; i < pictures.length; i++) {
    images.push({ url: pictures[i].secure_url });
  }

  const history = useHistory();



  const handleClick = () => {
    history.push("/payment", { title: name, amount: price, userId: owner._id });
  }

  return (
    <div className="product_card_offer">
      <div className="offer_content">
        <div className="images">
          <div className="images_content">
            <div className="image_main">
              {pictures.length > 1 ? (
                <SimpleImageSlider
                  width={380}
                  height={480}
                  images={images}
                  showBullets={false}
                  showNavs={true}
                  navSize={20}
                  navMargin={0}
                  navStyle={1}
                  slideDuration={0.7}
                  style={{ borderRadius: 4 }}
                />
              ) : (
                <img src={image} alt="product_pic" width={380} height={480} />
              )}
            </div>
            <div className="images_stamp">
              {pictures.length > 1 ? (
                pictures.map((elem, index) => {
                  return (
                    <img
                      src={elem.secure_url}
                      key={index}
                      alt="product_pic"
                      width={238}
                      height={238}
                      className={`stamp${index}`}
                    />
                  );
                })
              ) : (
                <>
                  <img src={image} alt="product_pic" width={238} height={238} />
                  <img src={image} alt="product_pic" width={238} height={238} />
                  <img className="bonus" src={image} alt="product_pic" width={238} height={238} />
                  <img className="bonus" src={image} alt="product_pic" width={238} height={238} />
                </>
              )}
            </div>
          </div>
          <div className="product_suggestion">
            <p className="member_items">(163) articles disponibles</p>
            <div className="big_buy">
              <div className="text_shop">
                <span>Achète en lot !</span>
                <p>Jusqu'à 10% de réduction</p>
              </div>
              <button>Acheter</button>
            </div>
          </div>
        </div>

        <div className="product_info">
          <div className="product_price">
            <strong>{price} €</strong>

            <div className="insurance">
              <div className="icon_shield">
                <FontAwesomeIcon
                  icon="shield-alt"
                  color="#0aaeb7"
                  className="icon_sh"
                />
              </div>
              <p className="insurance_details">
                Sois couvert·e par notre Protection acheteurs Vinted, qui inclut
                notre <span id="politic">politique de remboursement</span>.
              </p>
            </div>
            <div className="delivery">
              <div className="deliv_relay">
                <img src={relay} alt="mondial-relay" />
                <span>Mondial Relay</span>
                <span>3.51 €</span>
              </div>
              <div className="deliv_ups">
                <img src={ups} alt="ups" />
                <span>UPS Access Point</span>
                <span>5.32 €</span>
              </div>
            </div>
            <div className="protection">
              <span>Frais de Protection acheteurs</span>
              <p>0.70 € + 5% du prix de l'article</p>
            </div>
          </div>
          <div className="product_details">
            <ul>
              {details.map((elem, index) => {
                const keys = Object.keys(elem); //Afficher les clés sous forme de tableau
                return (
                  <li className="detail" key={index}>
                    <span className="detail_key">{keys[0]}</span>
                    <span className="detail_val">{elem[keys[0]]}</span>
                  </li>
                );
              })}
            </ul>

            <div className="basic_offer">
              <h3 id="name">{name}</h3>
              <p id="description">{description}</p>
            </div>
          </div>
          <div className="offer_buttons">
            <button className="send_msg">Échanger avec {owner}</button>
            <button className="buy" onClick={handleClick}>Acheter</button>
            <button className="favorite">
              <FontAwesomeIcon icon="heart" /> Favoris
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardOffer;
