import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";


const Home = ({userToken, setShowModal, setModalOnLogin, showModal, modalOnLogin}) => {

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
          <Header
            userToken={userToken}
            setShowModal={setShowModal}
            setModalOnLogin={setModalOnLogin}
            showModal={showModal}
            modalOnLogin={modalOnLogin}
          />
          <ProductList
            data={data}
            product_image={data.product_image}
            product_price={data.product_price}
            product_details={data.product_details}
            product_name={data.product_name}
          />
        </div>
      </div>
    );
    
};

export default Home;