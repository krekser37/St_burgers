import React from "react";
import Styles from "./orderDetails.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderIngredient from "./OrderIngredient/OrderIngredient";

export default function OrderDetails({ title }) {
  return (
    <>
      <div className="container">
        <p className={`${Styles.number} text text_type_digits-default`}>
          #03453
        </p>
        <h2 className="text text_type_main-medium mb-2">
          Black Hole Singularity острый бургер
        </h2>
        <span className={`${Styles.status} text text_type_main-default`}>
          Выполнен
        </span>
        <h2 className="text text_type_main-medium mt-15 mb-6">Состав:</h2>
        <div className={`${Styles.ElementsIngredients}`}>
          <OrderIngredient />
        </div>
        <div className={`${Styles.dataPrice} mb-6 mt-10`}>
          <p className="text text_type_main-default text_color_inactive">
            Сегодня, 16:20 i-GMT+3
          </p>
          <div className={`${Styles.price} ml-6`}>
            <p className="text text_type_digits-default">480</p>
            <CurrencyIcon />
          </div>
        </div>
      </div>
    </>
  );
}
