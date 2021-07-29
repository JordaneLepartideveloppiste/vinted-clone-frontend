

const ProductCardOffer = ({image, price, details, name, description, owner}) => {
    return (
      <div className="product_card_offer">
        <div className="offer_content">
          <img src={image} alt="product_pic" />
          <div className="product_info">
            <strong>{price} €</strong>
            <div className="product_details">
              <ul>
                {details.map((elem, index) => {
                  const keys = Object.keys(elem); //Afficher les clés sous forme de tableau
                  return (
                    <li className="detail" key={index}>
                      <span>{keys[0]}</span>
                      <span>{elem[keys[0]]}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="empty_space"></div>
              <div className="basic_offer">
                <h3>{name}</h3>
                <span>{description}</span>
                <strong>{owner}</strong>
              </div>
              <button>Acheter</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductCardOffer;