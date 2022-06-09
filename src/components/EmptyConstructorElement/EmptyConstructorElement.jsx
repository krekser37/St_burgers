import React from "react";
import Styles from "./EmptyConstructorElement.module.css";

function EmptyConstructorElement({ text }) {
  return (
    <div className={`${Styles.Empty}`}>
      <span className={Styles.EmptyText}>{text}</span>
    </div>
  );
}

export default EmptyConstructorElement;
