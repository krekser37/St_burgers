import React from "react";
import Styles from "./Preloader.module.css";
import PreloaderImage from "./img/preloader.svg";

const Preloader = () => {
  return (
    <>
      <img className={`${Styles.Preloader}`} src={PreloaderImage} alt="Прелоадер" />
    </>
  );
};

export default Preloader;
