import SimpleImageSlider from "react-simple-image-slider";

const ProductCardOffer = ({
  image,
  price,
  details,
  name,
  description,
  owner,
  pictures,
}) => {

  const images = []
  
  for (let i = 0; i < pictures.length; i++) {
    images.push({url: pictures[i].secure_url})
  }

  console.log(images);

  return (
    <div className="product_card_offer">
      <div className="offer_content">
        {pictures.length > 1 ? (
          <SimpleImageSlider
            width={320}
            height={420}
            images={images}
            showBullets={false}
            showNavs={true}
            navSize={20}
            navMargin={0}
            navStyle={1}
            slideDuration={0.7}
          />
        ) : (
          <img src={image} alt="product_pic" width={320} height={420} />
        )}

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
