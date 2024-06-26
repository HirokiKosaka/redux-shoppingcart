import React from "react";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../features/modal/ModalSlicer";
import { clearCart } from "../features/cart/CartSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>買い物かごを全てからにしますか？</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            OK
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            やめておく
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
