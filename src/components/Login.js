import axios from "axios";
import {  useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    
      try {
        const res = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/login",
          {
            email, //email: email
            password, // password : password
          }
        );
        console.log(res.data);
        if (res.data.token) {
          setUser(res.data.token);
          history.push("/");
        }
      } catch (err) {
        console.log(err.message);
      }
   
  };

  return (
    <div className="login">
      <div className="login_content">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Votre email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Votre mot de passe"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type="submit" value="Se connecter" />
        </form>
      </div>
    </div>
  );
};

export default Login;
