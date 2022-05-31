import React, { useState, useCallback } from "react";
import Styles from "./IngredientsItem.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  openIngredientDetails,
  closeIngredientDetails,
} from "../../services/actions/index";

const IngredientsItem = ({ ingredients, count }) => {
  const dispatch = useDispatch();
  /*   const currentIngredient = useSelector(store => store.ingredients.currentIngredient); */
  const isOpeningredientInModal = useSelector(
    (store) => store.ingredientDetails.isOpen
  );
  const { name, price, image } = ingredients;

  //const [isOpeningredientInModal, setOpeningredientInModal] = useState(false);
  //const [currentIngredient, setCurrentIngredient] = useState(null);

  /*   const handleOpenIngredientInModal = (ingredient) => {
    setCurrentIngredient(ingredient);
    setOpeningredientInModal(true);
  };

  const handleCloseIngredientInModal = () => {
    setOpeningredientInModal(false);
  }; */

  /*   const handleOpenIngredientInModal = (ingredients) => {
    dispatch({ type: SET_CURRENT_INGREDIENT_MODAL, payload: ingredients });
    setOpeningredientInModal(true);
  }; */

  /*   const handleCloseIngredientInModal = () => {
    dispatch({ type: RESET_CURRENT_INGREDIENT_MODAL });
    /* setOpeningredientInModal(false); 
  }; */

  const handleCloseIngredientInModal = useCallback(
    (item) => {
      dispatch(closeIngredientDetails(item));
    },
    [dispatch]
  );

  const handleOpenIngredientInModal = useCallback(
    (item) => {
      dispatch(openIngredientDetails(item));
    },
    [dispatch]
  );

  const ingredientTitle = "Детали ингредиента";

  return (
    <>
      <section
        className={`${Styles.IngredientsItem} mb-8`}
        onClick={() => handleOpenIngredientInModal(ingredients)}
      >
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
      {isOpeningredientInModal && (
        <Modal onClose={handleCloseIngredientInModal} title={ingredientTitle}>
          <IngredientDetails /* ingredient={currentIngredient} */ />
        </Modal>
      )}
    </>
  );
};

IngredientsItem.propTypes = {
  ingredients: PropTypes.object.isRequired,
  count: PropTypes.number,
};

export default IngredientsItem;
