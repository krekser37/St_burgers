import React, { FC } from "react";
import Styles from "./IngredientDetails.module.css";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../services/hooks";

const IngredientDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const ingredients = useAppSelector((state) => state.ingredients.ingredients);
  const ingredient = ingredients.find((ingredient) => ingredient._id === id);

  return (
    <>
      <div className={Styles.IngredientDetails}>
        <img
          className={Styles.IngredientImage}
          src={ingredient?.image}
          alt={ingredient?.name}
        />
        <h3 className="text text_type_main-medium mt-4 mb-8">
          {ingredient?.name}
        </h3>
        <ul className={`${Styles.IngredientDetailsList} mb-15`}>
          <li className={`${Styles.IngredientDetailsItem} mr-5`}>
            <p className="text text_type_main-default text_color_inactive mb-2">
              Калории, ккал
            </p>
            <p className="text text_type_main-default text_centre text_color_inactive">
              {ingredient?.calories}
            </p>
          </li>
          <li className={`${Styles.IngredientDetailsItem} mr-5`}>
            <p className="text text_type_main-default text_color_inactive mb-2">
              Белки, г
            </p>
            <p className="text text_type_main-default text_color_inactive">
              {ingredient?.proteins}
            </p>
          </li>
          <li className={`${Styles.IngredientDetailsItem} mr-5`}>
            <p className="text text_type_main-default text_color_inactive mb-2">
              Жиры, г
            </p>
            <p className="text text_type_main-default text_color_inactive">
              {ingredient?.fat}
            </p>
          </li>
          <li className={`${Styles.IngredientDetailsItem} mr-5`}>
            <p className="text text_type_main-default text_color_inactive mb-2">
              Углеводы, г
            </p>
            <p className="text text_type_main-default text_color_inactive">
              {ingredient?.carbohydrates}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default IngredientDetails;
