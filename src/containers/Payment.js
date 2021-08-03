import CheckoutForm from "../components/CheckoutForm"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import "../assets/css/containers/Payment.scss"
/*import Scart from "../components/Scart";*/


const Payment = () => {

    const location = useLocation();
    const {title, amount, userId, pictureId, setList, list} = location.state;

    const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");



    return (
      <div className="payment">
        <div className="payment_content">
            {/* <div className="scart">
                <Scart counter={1} title={title} amount={amount} list={list} setList={setList} delivery={5.32}/>
            </div> */}
          <Elements stripe={stripePromise}>
            <CheckoutForm title={title} amount={amount} userId={userId}/>
          </Elements>
        </div>
      </div>
    );
};

export default Payment;