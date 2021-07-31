import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/components/ProductCardHome.scss"

const ProductCardHome = ({
  product_image,
  product_price,
  product_details,
  product_name,
  _id
}) => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  return (
    <div className="product_card_home" key={_id}>
      <img
        src={product_image.secure_url}
        alt="product_pic"
        width={235}
        height={340}
      />
      <div className="first_details">
        <span id="prod_price">{product_price} €</span>
        <span id="nbr_likes">
          <FontAwesomeIcon icon="heart" color="rgb(182, 187, 187)" />
          <span>{getRandomInt(100)}</span>
        </span>
      </div>
      {product_details[1].TAILLE ? (
        <span id="prod_size">{product_details[1].TAILLE}</span>
      ) : (
        <span id="span_empty"></span>
      )}
      <h4 id="prod_name">{product_name}</h4>
    </div>
  );
};

export default ProductCardHome;
