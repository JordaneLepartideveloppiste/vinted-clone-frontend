import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCardOffer from "../components/ProductCardOffer";


const Offer = () => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {

      const fetchData = async () => {
        try {
          const res = await axios.get(
            `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
          );
          console.log(res.data);
          setData(res.data);
          setIsLoading(false);
        } catch (err) {
          console.log(err.message);
        }
      };
      fetchData();
    }, [id]);







    return isLoading ? (
      <span>Chargement des données...</span>
    ) : (
      <ProductCardOffer image={data.product_image.secure_url} price={data.product_price} details={data.product_details} name={data.product_name} description={data.product_description} owner={data.owner.account.username}/>
    );
};

export default Offer;