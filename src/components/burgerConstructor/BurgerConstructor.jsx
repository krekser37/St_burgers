import React, { useMemo, useContext, useReducer, useEffect } from "react";
import Styles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ingredientsDataPropTypes from "../utils/propTypes";
import OrderTotal from "../OrderTotal/OrderTotal";
import { IngredientsContext } from "../../services/AppContext";

const initialTotalPrice = { price: 0 };

function reducer(totalPrice, action) {
  switch (action.type) {
    case "increase":
      return { price: totalPrice.price + action.price };
    case "reset":
      return initialTotalPrice;
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

const BurgerConstructor = () => {
  const { ingredients } = useContext(IngredientsContext);
  const [totalPrice, dispatchTotalPrice] = useReducer(
    reducer,
    initialTotalPrice
  );
  /* console.log(totalPrice); */
  //получаем массив булок
  const buns = useMemo(
    () => ingredients.filter((item) => item.type === "bun"),
    [ingredients]
  );

  const mainBun = buns[0];

  //получаем массив ингредиентов
  const filling = useMemo(
    () => ingredients.filter((item) => item.type !== "bun"),
    [ingredients]
  );
  /* console.log(filling); */

  useEffect(() => {
    filling.map((ingredient) =>
      dispatchTotalPrice({ type: "increase", price: ingredient.price })
    );
  }, []);

  useEffect(() => {
    console.log(mainBun);
    dispatchTotalPrice({ type: "increase", price: mainBun.price });
  }, []);

  return (
    <section className={`${Styles.BurgerConstructor} ml-14`}>
      <section className={`${Styles.elements} mt-25`}>
        <div className={` mr-4`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={mainBun.name + `(верх)`}
            price={mainBun.price}
            thumbnail={mainBun.image}
          />
        </div>
        <ul className={`${Styles.ElementsIngredients}`}>
          {filling.map((ingredient) => {
            return (
              <li className={`${Styles.ElementsItem}`} key={ingredient._id}>
                <DragIcon className={`mr-2`} />
                <div>
                  <ConstructorElement
                    className={`${Styles.ElementsConstructor}`}
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image}
                  />
                </div>
              </li>
            );
          })}
        </ul>
        <div className={` mr-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={mainBun.name + ` (низ)`}
            price={mainBun.price}
            thumbnail={mainBun.image}
          />
        </div>
      </section>
      <OrderTotal totalPrice={totalPrice} />
    </section>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsDataPropTypes.isRequired),
};

export default BurgerConstructor;
