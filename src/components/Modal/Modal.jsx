import React, { useState } /* { useEffect } */ from "react";
import ReactDOM from "react-dom";
import Styles from "./Modal.module.css";
import PropTypes from "prop-types";
import { CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
/* import ModalOverlay from "../ModalOverlay/ModalOverlay"; */

const modalRoot = document.getElementById("modalRoot");

const Modal = ({ title, onClose, children }) => {

const[isCloseModal, setCloseModal] = useState(true);

  const handleCloseModal = () => {
    setCloseModal(() => isCloseModal(false))
  };

/*   function onEscDown(e) {
    e.key === "Escape" && onCloseModal();
  };

  React.useEffect(() => {
    document.addEventListener("keydown", onEscDown)
    return () => {
      document.removeEventListener("keydown", onEscDown)
    }
  }, []) */


/*   useEffect(() => {
    function handleEsc(e) {
      e.key === "Escape" && onClose;
    };
    document.addEventListener("keydown", handleEsc);
    return() => {
      document.removeEventListener("keydown", handleEsc);
    }
  }, [onClose]); */

  return ReactDOM.createPortal(
    <>
      <div className={Styles.Modal} onClick={handleCloseModal}>
{/*         <ModalOverlay onClick={onCloseModal} /> */}
        <div className={Styles.ModalHeader}>
          <h2 className={Styles.ModalTitle}>{/* {title} */} afdgbzvsd</h2>
          <button onClick={handleCloseModal}><CloseIcon type='primary' /></button>
        </div>
        <div
          className={`${Styles.ModalContent}`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
