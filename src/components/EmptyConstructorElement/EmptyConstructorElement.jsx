import React from "react";
import Styles from "./EmptyConstructorElement.module.css";
import PropTypes from "prop-types";

function EmptyConstructorElement({ text }) {
  return (
    <div className={`${Styles.Empty}`}>
      <span className={Styles.EmptyText}>{text}</span>
    </div>
  );
}

EmptyConstructorElement.propTypes = {
  orderNumber: PropTypes.string,
};

export default EmptyConstructorElement;
