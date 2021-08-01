import { Link } from "react-router-dom";
import ProductCardHome from "./ProductCardHome";
import "../assets/css/components/ProductList.scss"



const ProductList = ({data, product_image, product_price, product_name}) => {
    return (
      <div className="product_list">
        <div className="title_list">
          <span className="title_home">Articles populaires</span>
          <span className="see_all">Voir tout</span>
        </div>
        <div className="product_list_content">
          {data.offers.map((offer, index) => {
            return (
              <Link to={`/offer/${offer._id}`} key={index}>
                <ProductCardHome {...offer} />
              </Link>
            );
          })}
        </div>
      </div>
    );
};

export default ProductList;