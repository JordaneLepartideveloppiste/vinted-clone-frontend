import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Offer = () => {

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

    const {id} = useParams();



    return (
        <div className="offer">
            <div className="offer_content">
                
            </div>
        </div>
    );
};

export default Offer;