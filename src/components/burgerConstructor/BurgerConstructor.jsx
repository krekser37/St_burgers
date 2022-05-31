import React, { useMemo, useContext, useEffect, useReducer } from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import Styles from "./BurgerConstructor.module.css";
import ingredientsDataPropTypes from "../utils/propTypes";
import OrderTotal from "../OrderTotal/OrderTotal";
import { IngredientsContext } from "../../services/AppContext";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

/* const initialTotalPrice = { price: 0 };

function reducer(totalPrice, action) {
  switch (action.type) {
    case "set":
      const mainBunPrice = action.payload.mainBun.price * 2;
      const sum = action.payload.filling.reduce((prevVal, item) => {
        return prevVal + item.price;
      }, mainBunPrice);
      return { price: sum };
    case "reset":
      return initialTotalPrice;
    default:
      throw totalPrice;
  }
} */

function BurgerConstructor() {
  const dispatch = useDispatch();
  const filling = useSelector((state) => state.burgerConstructor.filling);
  const mainBun = useSelector((state) => state.burgerConstructor.mainBun);
  //const orderIngredients = useSelector((state) => state.order.orderIngredients);

  const totalPrice = useMemo(() => {
    return (
      (mainBun ? mainBun.price * 2 : 0) +
      filling.reduce((s, v) => s + v.price, 0)
    );
  }, [mainBun, filling]);

  //const orderIngredients = useSelector((state) => state.order.orderIngredients);
  //console.log(orderIngredients);

 /*  const selectIngredients = useContext(IngredientsContext); */
/*     const [totalPrice, dispatchTotalPrice] = useReducer(
    reducer,
    initialTotalPrice
  ); */
  console.log(filling);
  console.log(mainBun);
  console.log(totalPrice);
  /*   const mainBun = useMemo(
    () =>
      selectIngredients.find((item) => item.name === "Краторная булка N-200i"),
    [selectIngredients]
  );
  
  const filling = useMemo(
    () => selectIngredients.filter((item) => item.type !== "bun"),
    [selectIngredients]
  ); */

/*       useEffect(() => {
    dispatchTotalPrice({ type: "set", payload: {filling: filling, mainBun: mainBun} });
  }, [filling , mainBun ]) */

  /*   useEffect(() => {
    const totalPrice = filling.reduce((prevVal, item) => {
      prevVal + item.price;
    }, mainBun.price * 2);
    dispatchTotalPrice({ type: "set", payload: totalPrice });
  }, [selectIngredients]); */

  return (
    <section className={`${Styles.BurgerConstructor} ml-14`}>
      <section className={`${Styles.elements} mt-25`}>
        <div className="mr-4">
          <ConstructorElement
            type="top"
            text= {`${mainBun.name} (верх)`}
            price={mainBun.price}
            thumbnail={mainBun.image}
            key={(mainBun.id = nanoid())}
          />
        </div>
        <ul className={`${Styles.ElementsIngredients}`}>
          {filling.map((ingredient) => (
            <li
              className={Styles.ElementsItem}
              key={(ingredient.id = nanoid())}
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
            text= {`${mainBun.name} (низ)`}
            price={mainBun.price}
            thumbnail={mainBun.image}
            key={(mainBun.id = nanoid())}
          />
        </div>
      </section>
      <OrderTotal totalPrice={totalPrice}  />
    </section>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsDataPropTypes.isRequired),
};

export default BurgerConstructor;
