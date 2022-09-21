import React, { FC } from "react";
import Styles from "./ModalOverlay.module.css";
/* import PropTypes from "prop-types"; */

type TOnClose = {
  onClose: () => void,
}

const ModalOverlay: FC<TOnClose> = ({ onClose }) => {
  console.log(onClose);
  return <div className={`${Styles.ModalOverlay}`} onClick={onClose}></div>;
};

/* ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
}; */

export default ModalOverlay;
