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
import { nanoid } from "nanoid";

const initialTotalPrice = { price: 0 };

function reducer(totalPrice, action) {
  switch (action.type) {
    case "set":
      const mainBunPrice = action.payload.mainBun.price*2;
      const sum = action.payload.filling.reduce((prevVal, item) => {
        return prevVal + item.price}, mainBunPrice);
      return { price: sum };
    case "reset":
      return initialTotalPrice;
    default:
      throw totalPrice;
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
    dispatchTotalPrice({ type: "set", payload: {filling: filling, mainBun: mainBun} });
  }, [selectIngredients])

/*   useEffect(() => {
    const totalPrice = filling.reduce((prevVal, item) => {prevVal + item.price}, mainBun.price*2);
    dispatchTotalPrice({ type: "set", payload: totalPrice  });
  }, [selectIngredients]) */

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
            key={mainBun.id = nanoid()}
          />
        </div>
        <ul className={`${Styles.ElementsIngredients}`}>
          {filling.map((ingredient) => (
            <li
              className={Styles.ElementsItem}
              key={ingredient.id = nanoid()}
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
            key={mainBun.id = nanoid()}
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
