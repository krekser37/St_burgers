import React, { FC, useMemo } from "react";
import Styles from "./IngredientsItem.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { openIngredientDetails } from "../../services/actions/ingredient-details";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { TIngredient } from "../../services/types/types";

type TIngredientItem = {
  ingredient: TIngredient,
}

const IngredientsItem:FC<TIngredientItem> = ({ingredient}) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const filling = useAppSelector((state) => state.burgerConstructor.filling);
  const bun = useAppSelector((state) => state.burgerConstructor.bun);
  console.log(ingredient);
  const handleOpenIngredientInModal = (ingredient:TIngredient) => {
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

  const count = useMemo(()=> {
      if (ingredient.type === "bun") {
        return bun && ingredient._id === bun._id ? 2 : 0;
      }
      return filling && filling.filter((item) => item._id === ingredient._id).length;

  },[bun, filling, ingredient]);

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
            <CurrencyIcon type="primary"/>
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

export default IngredientsItem;
