import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductsList from "../components/ProductCardHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCardHome from "../components/ProductCardHome";
import { Link } from "react-router-dom";


const Home = () => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(
            "https://lereacteur-vinted-api.herokuapp.com/offers"
          );
          console.log(res.data);
          setData(res.data);
          setIsLoading(false);
        } catch (err) {
          console.log(err.message);
        }
      };
      fetchData();
    }, []);


    


    return isLoading ? (
        <span>Chargement des données...</span>
    ) : (
        <div className="home">
            <div className="home_content">
                <Header />
                {data.offers.map(({product_pictures, product_price, product_details, product_name, _id}, index) => {

                    return (
                      <Link to={`/offer/${_id}`}>
                        <ProductCardHome
                          product_pictures={product_pictures}
                          product_price={product_price}
                          product_details={product_details}
                          product_name={product_name}
                        />
                      </Link>
                    );
                })}
            </div>
        </div>);
    
};

export default Home;