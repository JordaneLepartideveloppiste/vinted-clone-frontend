import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup">
      <form >
        <input type="text" placeholder="Votre nom"/>
        <input type="text" placeholder="Votre email"/>
        <input type="password" placeholder="Votre mot de passe"/>
        <input type="checkbox"/><span>S'inscrire à notre newsletter</span>
        <p>En m'inscrivant je confirme avoir lu et accepté les Termes & Conditions et Politique de Confidentialité de Vinted. Je confirme avoir au moins 18 ans.</p>
        <input type="submit" value="S'inscrire"/>
        <Link>Tu as déjà un compte? Connecte-toi !</Link>
      </form>
    </div>
  );
};

export default SignUp;
