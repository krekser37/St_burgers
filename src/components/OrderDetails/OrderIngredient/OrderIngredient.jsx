import React from "react";
import Styles from "./orderIngredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Preloader from "../../Preloader/Preloader";
import PropTypes from "prop-types";
export default function OrderIngredient({ ingredient, index , count}) {

  if (!ingredient) {
    return <Preloader />
  }

  return (
    <section className={`${Styles.OrderIngredient}`}>
      <div className={`${Styles.info}`}>
        {" "}
        <div className={`${Styles.ingredient} mb-2`}>
          <img
            className={`${Styles.image}`}
            src={ingredient?.image}
            alt={ingredient?.name}
          />
        </div>
        <h2 className="text text_type_main-default pl-4">{ingredient.name}</h2>
      </div>
      <div className={`${Styles.price}`}>
        <p className="text text_type_digits-default  pr-2">
        {count} x {ingredient.price} 
        </p>
        <CurrencyIcon />
      </div>
    </section>
  );
}
/* 
OrderIngredient.propTypes = {
  ingredient: PropTypes.string,

};
 */