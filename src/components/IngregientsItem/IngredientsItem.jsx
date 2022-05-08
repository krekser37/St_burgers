import React from "react";
import Styles from "./IngredientsItem.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types"; 

const IngredientsItem = ({ ingredients, count }) => {
  const { name, price, image } = ingredients;

  return (
    <section className={`${Styles.IngredientsItem} mb-8`}>
      <img src={image} alt={name} className={Styles.IngredientsImage} />
      <div className={`${Styles.IngredientsItemPrice} mt-1 mb-1`}>
        <p className={`${Styles.IngredientsPrice} mr-2`}>{price}</p>
        <CurrencyIcon />
      </div>
      <h4 className={`${Styles.IngridientText} text text_type_main-default`}>
        {name}
      </h4>
      <Counter count={count} size="default" />
    </section>
  );
};

IngredientsItem.propTypes = {
  ingredients: PropTypes.object.isRequired,
  count: PropTypes.number,
};

export default IngredientsItem;
