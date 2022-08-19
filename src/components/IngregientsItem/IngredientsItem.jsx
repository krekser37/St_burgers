import React from "react";
import Styles from "./IngredientsItem.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { openIngredientDetails } from "../../services/actions/ingredient-details";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";

const IngredientsItem = ({ingredient}) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleOpenIngredientInModal = (ingredient) => {
    console.log(ingredient);
    dispatch(openIngredientDetails(ingredient));
};

  const [{ opacity }, dragRef] = useDrag(
    {
      type: "ingredient",
      item: ingredient,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }
  );

  const filling = useSelector((state) => state.burgerConstructor.filling);
  const bun = useSelector((state) => state.burgerConstructor.bun);

  let count = filling.filter((item) => item._id === ingredient._id).length;

  if (ingredient._id === bun._id) {
    count = 2;
  }

  return (
    <>
      <Link
        to={{
          pathname: `/ingredients/${ingredient._id}`,
          state: { background: location }
        }}
        onClick={() => handleOpenIngredientInModal(ingredient)}
        className={`${Styles.IngridientLink}`}
      >
        <section
          ref={dragRef}
          className={`${Styles.IngredientsItem} mb-8`}
          style={{ opacity }}
        >
          <img src={ingredient.image} alt={ingredient.name} className={Styles.IngredientsImage} />
          <div className={`${Styles.IngredientsItemPrice} mt-1 mb-1`}>
            <p className={`${Styles.IngredientsPrice} mr-2`}>{ingredient.price}</p>
            <CurrencyIcon />
          </div>
          <h4
            className={`${Styles.IngridientText} text text_type_main-default`}
          >
            {ingredient.name}
          </h4>
          <Counter count={count} size="default" />
        </section>
      </Link>
    </>
  );
};

IngredientsItem.propTypes = {
  ingredient: PropTypes.object.isRequired,
};

export default IngredientsItem;
