import { Link, useLocation } from "react-router-dom";
import "../assets/css/components/PaymentSucceeded.scss"


const PaymentSucceeded = () => {

    const location = useLocation();
    const { title, amount } = location.state;

    return (
      <div className="payment_succeeded">
        <div className="payment_succeeded_content">
          <h2>Félicitations !</h2>
          <p>
            Vous êtes le nouveau propriétaire de ce magnifique article intitulé
            :
          </p>
          <em>{title}</em>
          <p>
            Et cela pour la modique somme de <strong>{amount}</strong> € !
          </p>
          <span>
            Souhaitez-vous poursuivre sur cette lancée? Et continuer à faire des
            affaires?
          </span>
          <br />
          <Link to="/">Retour à la boutique</Link>
        </div>
      </div>
    );
};

export default PaymentSucceeded;