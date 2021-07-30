import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const SignUp = ({setUser}) => {

    const history= useHistory();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        try {
           e.preventDefault();
           
           const res = await axios.post(
             "https://lereacteur-vinted-api.herokuapp.com/user/signup",
             {
               email,
               username,
               password,
             }
           );
             console.log(res.data);
           if (res.data.token) {
            setUser(res.data.token);
            history.push('/');
           }
        } catch (err) {
            console.log(err.response);
            console.log(err.message);
            if (err.response.status === 409) {
              setErrorMessage("Cet email est déjà utilisé.");
            }
        }
    }

  return (
    <div className="signup">
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder="Votre nom" onChange={(e) => { setUsername(e.target.value)}} />
        <input type="email" placeholder="Votre email" onChange={(e) => { setEmail(e.target.value)}} />
        <input type="password" placeholder="Votre mot de passe" onChange={(e) => { setPassword(e.target.value)}} />
        <input type="checkbox"/><span>S'inscrire à notre newsletter</span>
        <p>En m'inscrivant je confirme avoir lu et accepté les Termes & Conditions et Politique de Confidentialité de Vinted. Je confirme avoir au moins 18 ans.</p>
        <p style={{color: "red"}}>{errorMessage}</p>
        <input type="submit" value="S'inscrire"/>
        <Link to="/login">Tu as déjà un compte? Connecte-toi !</Link>
      </form>
    </div>
  );
};

export default SignUp;
