import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <img src={product_image.secure_url} alt="product_pic" />
      <div className="first_details">
        <span id="prod_price">{product_price} €</span>
        <span id="nbr_likes">
          {getRandomInt(100)}
          <FontAwesomeIcon icon="heart" color="lightgray" />
        </span>
      </div>
      {product_details[1].TAILLE ? (
        <span id="prod_size">{product_details[1].TAILLE}</span>
      ) : (
        <span></span>
      )}
      <h4 id="prod_name">{product_name}</h4>
    </div>
  );
};

export default ProductCardHome;
