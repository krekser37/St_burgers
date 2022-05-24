import React, {
  useMemo, useContext, useEffect, useReducer,
} from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import Styles from "./BurgerConstructor.module.css";
import ingredientsDataPropTypes from '../utils/propTypes';
import OrderTotal from "../OrderTotal/OrderTotal";
import { IngredientsContext } from "../../services/AppContext";

const initialTotalPrice = { price: 0 };

function reducer(totalPrice, action) {
  switch (action.type) {
    // case "increase":
    // return { price: totalPrice.price + action.price };
    case "set":
      return { price: totalPrice.price +action.payload };
    case "reset":
      return initialTotalPrice;
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

function BurgerConstructor() {
  const selectIngredients = useContext(IngredientsContext);
  const [totalPrice, dispatchTotalPrice] = useReducer(
    reducer,
    initialTotalPrice,
  );

  const mainBun = useMemo(
    () => selectIngredients.find((item) => item.name === "Краторная булка N-200i"),
    [selectIngredients],
  );

  const filling = useMemo(
    () => selectIngredients.filter((item) => item.type !== "bun"),
    [selectIngredients],
  );

  useEffect(() => {
    selectIngredients.forEach((ingredient) => {
      dispatchTotalPrice({ type: "set", payload: ingredient.price });
    });
  }, [selectIngredients]);

  return (
    <section className={`${Styles.BurgerConstructor} ml-14`}>
      <section className={`${Styles.elements} mt-25`}>
        <div className="mr-4">
          <ConstructorElement
            type="top"
            /* isLocked={true} */
            text={mainBun.name + " (верх)"}
            price={mainBun.price}
            thumbnail={mainBun.image}
            key={mainBun.id}
          />
        </div>
        <ul className={`${Styles.ElementsIngredients}`}>
          {filling.map((ingredient) => (
            <li
              className={Styles.ElementsItem}
              key={ingredient.id}
            >
              <DragIcon className="mr-2" />
              <div>
                <ConstructorElement
                  className={`${Styles.ElementsConstructor}`}
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="mr-4">
          <ConstructorElement
            type="bottom"
            /* isLocked={true} */
            text={mainBun.name + " (низ)"}
            price={mainBun.price}
            thumbnail={mainBun.image}
            key={mainBun.id}
          />
        </div>
      </section>
      <OrderTotal totalPrice={totalPrice} />
    </section>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsDataPropTypes.isRequired),
};

export default BurgerConstructor;
