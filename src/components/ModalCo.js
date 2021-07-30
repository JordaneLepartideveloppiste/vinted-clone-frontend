

import Login from "./Login";
import SignUp from "./SignUp";
import"../assets/css/components/ModalCo.scss";


const ModalCo = ({modalOnLogin, setShowModal, setUser, setModalOnLogin}) => {

    
    return (
      <div className="modal">
        <div className="modal_content">
          <div className="modal_header">
            <button
              id="modalClose_btn"
              onClick={() => {
                setShowModal(false);
                setModalOnLogin(false);
              }}
            >
              X
            </button>
          </div>
          <div className="modal_body">
            {modalOnLogin ? (
              <Login setUser={setUser} setShowModal={setShowModal} />
            ) : (
              <SignUp
                setUser={setUser}
                setShowModal={setShowModal}
                setModalOnLogin={setModalOnLogin}/>
            )}
          </div>
          <div className="modal_footer"></div>
        </div>
      </div>
    );
};

export default ModalCo;