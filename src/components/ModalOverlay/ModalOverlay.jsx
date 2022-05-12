import React from "react";
import Styles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({onClose}) => {
  return <div className={`${Styles.ModalOverlay}`} onClick={onClose}></div>;
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
