import React, { forwardRef }from "react";
import Styles from "./IngredientsList.module.css";
import IngredientsItem from "../IngregientsItem/IngredientsItem";
import { TIngredient } from "../../services/types/types";

type TIngredientsList ={
  title: string,
  titleId: string,
  ingredients: Array<TIngredient>,
}

const IngredientsList = forwardRef<HTMLUListElement, TIngredientsList>(({ title, titleId, ingredients }, ref) => {
  return (
    <section className={`${Styles.IngredientsList}`} ref={ref}>
      <h3
        className={`${Styles.title} text text_type_main-medium mt-10 mb-6`}
        id={titleId}
      >
        {title}
      </h3>
      <div className={`${Styles.items}`}>
        {ingredients.map((ingredient) => {
          return (
            <IngredientsItem
              ingredient={ingredient}
              key={ingredient._id}
            />
          );
        })}
      </div>
    </section>
  );
});

export default IngredientsList;
