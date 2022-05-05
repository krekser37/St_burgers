import React from "react";
import Styles from "./IngredientsList.module.css";
import IngredientsItem from "../IngregientsItem/IngredientsItem";



const IngredientsList = ({ title, titleId, ingredients }) => {
  /* const [data]  = this.props; */
  /* const [current, setCurrent] = React.useState("one"); */
  return (
    <section className={`${Styles.IngredientsList}`}>
      <h3 className={`${Styles.title} text text_type_main-medium mt-10 mb-6`} id={titleId}>
        {title}
      </h3>
      <div className={`${Styles.items}`}>
        {ingredients.map((ingredients) => {
          return <IngredientsItem 
          ingredients={ingredients} 
          key = {ingredients._id}
          count = {1}
          />
        })}
      </div>
    </section>
  );
};

export default IngredientsList;
