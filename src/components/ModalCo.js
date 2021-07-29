import Cookies from "js-cookie";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";



const ModalCo = (props) => {

    const [userToken, setUserToken] = useState(
      Cookies.get("userToken") || null
    );

    const setUser = (token) => {
      Cookies.set("userToken", token, { expires: 30 });
      setUserToken(token);
    };

    

    return (
        <div className="modal">
            <div className="modal_content">
                {(userToken) ? <Login /> : <SignUp />}
            </div>
            
        </div>
    );
};

export default ModalCo;