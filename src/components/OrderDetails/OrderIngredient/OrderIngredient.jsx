import React from "react";
import Styles from "./orderIngredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default function OrderIngredient() {
  return (
    <section className={`${Styles.OrderIngredient}`}>
      <div className={`${Styles.info}`}>
        {" "}
        <img className={`${Styles.image}`} />
        <h2 className="text text_type_main-default pl-4">
          Black Hole Singularity острый бургер
        </h2>
      </div>
      <div className={`${Styles.price}`}>
      <p className="text text_type_digits-default  pr-2">2 x 480</p>
      <CurrencyIcon />

      </div>

    </section>
  );
}
