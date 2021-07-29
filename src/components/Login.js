import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


const Login = ({setUser}) => {
    const history = useHistory();

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        
          const fetchData = async () => {
            try {
              const res = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/user/login"
              );
              console.log(res.data);
              setData(res.data);
              setIsLoading(false);
            } catch (err) {
              console.log(err.message);
            }
          };
          fetchData();
      

        const token = "12345";
        setUser(token);
        history.push("/");
    }

    

    return (
      <div className="login">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Votre email" />
          <input type="password" placeholder="Votre mot de passe" />
          <input type="submit" value="Se connecter" />
        </form>
      </div>
    );
};

export default Login;