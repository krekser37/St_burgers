import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import Styles from "./Modal.module.css";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const modalRoot = document.getElementById("modalRoot");

const Modal = ({ title, onClose, children }) => {
  console.log(title);
 /*  console.log(onClose);
  console.log(children); */

/*   useEffect(() => {
    const onEscDown = (event) => event.key === "Escape" && onClose();

    document.addEventListener("keydown", onEscDown);

    return () => document.removeEventListener("keydown", onEscDown);
  }, [onClose]); */

  const onEscDown = useCallback((e) => {
    if(e.key === "Escape") {
    onClose()};
  },[onClose]);

  useEffect(() => {
    document.addEventListener("keydown", onEscDown);
    return () => {
      document.removeEventListener("keydown", onEscDown);
    };
  }, [onEscDown]);

  return ReactDOM.createPortal(
    <>
      <div className={`${Styles.Modal} pl-10 pr-10`} /* onClick={onClose} */>
        <div className={`${Styles.ModalHeader} mt-10`}>
          <h2 className={`${Styles.ModalTitle} text text_type_main-large `}>
            {title}
          </h2>
          <button className={`${Styles.ModalCloseButton}`}>
            <CloseIcon type="primary" onClick={onClose} />
          </button>
        </div>
        <div className={`${Styles.ModalContent}`}>{children}</div>
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
