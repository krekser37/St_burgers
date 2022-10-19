import React, { FC } from "react";
import Styles from "./EmptyConstructorElement.module.css";
/* import PropTypes from "prop-types"; */

type TEmptyConstructorElement = {
  text: string
}

const EmptyConstructorElement: FC <TEmptyConstructorElement> = ({ text }) => {
  return (
    <div className={`${Styles.Empty}`}>
      <span className={Styles.EmptyText}>{text}</span>
    </div>
  );
}

/* EmptyConstructorElement.propTypes = {
  orderNumber: PropTypes.string,
};
 */
export default EmptyConstructorElement;
