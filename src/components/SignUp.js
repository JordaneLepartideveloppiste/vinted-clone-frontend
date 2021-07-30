import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/components/SignUp.scss"

const SignUp = ({setUser, setShowModal, setModalOnLogin}) => {


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
            setShowModal(false);
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
      <form onSubmit={handleSubmit}>
        <input
          className="input_name"
          type="text"
          placeholder="Votre nom"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className="input_email"
          type="email"
          placeholder="Votre email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="input_password"
          type="password"
          placeholder="Votre mot de passe"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input className="input_checkbox" type="checkbox" />
        <span className="input_checkboxLabel">
          S'inscrire à notre newsletter
        </span>
        <p className="text_confirmTerms">
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <p className="error_message" style={{ color: "red" }}>
          {errorMessage}
        </p>
        <input className="input_submit" type="submit" value="S'inscrire" />
        <Link
          className="link_to_login"
          to="/login"
          onClick={() => {
            setModalOnLogin(true);
          }}
        >
          Tu as déjà un compte? Connecte-toi !
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
