import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({title, amount, userId}) => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
      console.log("Coucou");
      try {
        event.preventDefault();
        // Récupérer les données du formulaire
        const cardElements = elements.getElement(CardElement);
        // Envoyer à l'API Stripe
        const stripeResponse = await stripe.createToken(cardElements, {
          name: userId,
        });

        console.log(stripeResponse.token.id);
        console.log(title);
        console.log(amount);
        //   console.log(stripeResponse.token.id);
        // Envoyer le stripeToken au serveur
        const res = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/payment",
          {
            token: stripeResponse.token.id,
            title: title,
            amount: amount,
          }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error.response);
        console.log(error.message);
      }
    };

  return (
    <div className="checkout_form">
      <form onSubmit={handleSubmit}>
        {/* formulaire dans lequel le user va rentrer ses données bancaires */}
        <CardElement />
        <input type="submit" />
      </form>
    </div>
  );
};

export default CheckoutForm;
