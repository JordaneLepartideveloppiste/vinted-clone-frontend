import CheckoutForm from "../components/CheckoutForm"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";


const Payment = () => {

    const location = useLocation();
    const {title, amount, userId} = location.state;

    const stripePromise = loadStripe(
      "pk_test_51Ij4vLIwEdB0Tb7VvBl7keKAS2iLcZ62GhyeUI50cUMk51edNPUe4NPIYqRbr1TSyFUfCLwiROUEr5vNjypaw2PI00vlQQ4Tqi"
    );

    return (
      <div className="payment">
        <div className="payment_content">
          <Elements stripe={stripePromise}>
            <CheckoutForm title={title} amount={amount} userId={userId}/>
          </Elements>
        </div>
      </div>
    );
};

export default Payment;