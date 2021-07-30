

import Login from "./Login";
import SignUp from "./SignUp";



const ModalCo = ({showModal, setShowModal, setUser}) => {

    
    return (
      <div className="modal">
        <div className="modal_content">
          <div className="modal_header">
            <button
              onClick={() => {
                setShowModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="modal_body">
            {/* {(userToken) ? <Login /> : <SignUp />} */}
          </div>
          <div className="modal_footer">
            
          </div>
        </div>
      </div>
    );
};

export default ModalCo;