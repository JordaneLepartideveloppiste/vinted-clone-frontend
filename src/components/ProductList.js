import { Link } from "react-router-dom";
import ProductCardHome from "./ProductCardHome";
import "../assets/css/components/ProductList.scss"



const ProductList = ({data, product_image, product_price, product_name}) => {
    return (
      <div className="product_list">
        <span className="title_home">Articles populaires</span>
        <div className="product_list_content">
          {data.offers.map(
            (
              {
                product_image,
                product_price,
                product_details,
                product_name,
                _id,
              },
              index
            ) => {
              return (
                <Link to={`/offer/${_id}`}>
                  <ProductCardHome
                    product_image={product_image}
                    product_price={product_price}
                    product_details={product_details}
                    product_name={product_name}
                  />
                </Link>
              );
            }
          )}
        </div>
      </div>
    );
};

export default ProductList;