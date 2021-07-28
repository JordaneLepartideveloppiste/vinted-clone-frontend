import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";


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

    const [productsList, setProductsList] = useState([
        
    ]);


    return isLoading ? (
        <span>Chargement des données...</span>
    ) : (
        <div className="home">
            <div className="home_content">
                <Header />
                <ProductsList />
            </div>
        </div>);
    
};

export default Home;