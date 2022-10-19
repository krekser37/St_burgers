import React, { FC } from "react";
import Styles from "./orderIngredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Preloader from "../../Preloader/Preloader";
import { TIngredient } from "../../../services/types/types";
/* import PropTypes from "prop-types"; */

type TOrderIngredient = {
  ingredient: TIngredient | undefined,
  count: number | undefined,
}

const OrderIngredient: FC<TOrderIngredient> = ({ ingredient, count}) => {

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
        <h2 className="text text_type_main-default pl-4">{ingredient?.name}</h2>
      </div>
      <div className={`${Styles.price}`}>
        <p className="text text_type_digits-default  pr-2">
        {count} x {ingredient.price} 
        </p>
        <CurrencyIcon type="primary"/>
      </div>
    </section>
  );
}
/* 
OrderIngredient.propTypes = {
  ingredient: PropTypes.string,

};
 */

export default OrderIngredient;