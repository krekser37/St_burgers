import React from "react";
import Styles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({onClick}) => {
  return <div className={`${Styles.ModalOverlay}`} onClick={onClick}></div>;
};

ModalOverlay.propTypes = {
  isOpen: PropTypes.func.isRequired,
};

export default ModalOverlay;
