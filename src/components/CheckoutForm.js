import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../assets/css/components/CheckOutForm.scss"

const CheckoutForm = ({title, amount, userId}) => {

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const handleSubmit = async (event) => {
      console.log("wesh");
      try {
        event.preventDefault();

        const cardElements = elements.getElement(CardElement);
  
        const stripeResponse = await stripe.createToken(cardElements, {
          name: userId,
        });

        console.log(stripeResponse.token.id);
        console.log(title);
        console.log(amount);
 
        const res = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/payment",
          {
            token: stripeResponse.token.id,
            title: title,
            amount: amount,
          }
        );
        console.log(res.data);

        res.data.status === "succeeded" && history.push("/success", {title: title, amount: amount})

      } catch (error) {
        console.log(error.response);
        console.log(error.message);
      }
    };

  return (
    <div className="checkout_form">
        <p>Veuillez remplir les champs dûs à cet effet :</p>
      <form onSubmit={handleSubmit}>
        {/* formulaire dans lequel le user va rentrer ses données bancaires */}
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <input type="submit" value="Confirmer"/>
      </form>
    </div>
  );
};

export default CheckoutForm;
