import React from "react";
import Styles from "./IngredientsList.module.css";
import IngredientsItem from "../IngregientsItem/IngredientsItem";
import PropTypes from "prop-types";

const IngredientsList = ({ title, titleId, ingredients }) => {
  return (
    <section className={`${Styles.IngredientsList}`}>
      <h3
        className={`${Styles.title} text text_type_main-medium mt-10 mb-6`}
        id={titleId}
      >
        {title}
      </h3>
      <div className={`${Styles.items}`}>
        {ingredients.map((ingredients) => {
          return (
            <IngredientsItem
              ingredients={ingredients}
              key={ingredients._id}
              count={1}
            />
          );
        })}
      </div>
    </section>
  );
};

IngredientsList.propTypes = {
  title: PropTypes.string.isRequired,
  titleId: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
};

export default IngredientsList;
