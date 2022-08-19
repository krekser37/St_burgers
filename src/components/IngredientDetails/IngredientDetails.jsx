import React from "react";
import Styles from "./IngredientDetails.module.css";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const IngredientDetails = ({ title }) => {
  const { id } = useParams();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const ingredient = ingredients.find((ingredient) => ingredient._id === id);
  const location = useLocation();
  const background = location?.state?.background;


  if (ingredients.length !== 0) {
    return (
      <>
        <div className={Styles.IngredientDetails}>
          {!background && (
            <h2
              className={`${Styles.IngredientTitle} text text_type_main-large `}
            >
              {title}
            </h2>
          )}
          <img
            className={Styles.IngredientImage}
            src={ingredient.image}
            alt={ingredient.name} 
          />
          <h3 className="text text_type_main-medium mt-4 mb-8">
            {ingredient.name}
          </h3>
          <ul className={`${Styles.IngredientDetailsList} mb-15`}>
            <li className={`${Styles.IngredientDetailsItem} mr-5`}>
              <p className="text text_type_main-default text_color_inactive mb-2">
                Калории, ккал
              </p>
              <p className="text text_type_main-default text_centre text_color_inactive">
                {ingredient.calories}
              </p>
            </li>
            <li className={`${Styles.IngredientDetailsItem} mr-5`}>
              <p className="text text_type_main-default text_color_inactive mb-2">
                Белки, г
              </p>
              <p className="text text_type_main-default text_color_inactive">
                {ingredient.proteins}
              </p>
            </li>
            <li className={`${Styles.IngredientDetailsItem} mr-5`}>
              <p className="text text_type_main-default text_color_inactive mb-2">
                Жиры, г
              </p>
              <p className="text text_type_main-default text_color_inactive">
                {ingredient.fat}
              </p>
            </li>
            <li className={`${Styles.IngredientDetailsItem} mr-5`}>
              <p className="text text_type_main-default text_color_inactive mb-2">
                Углеводы, г
              </p>
              <p className="text text_type_main-default text_color_inactive">
                {ingredient.carbohydrates}
              </p>
            </li>
          </ul>
        </div>
      </>
    );
  }
};

IngredientDetails.propTypes = {
  title: PropTypes.string,
};

export default IngredientDetails;
