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
import { useDrop } from "react-dnd";
import { type } from "@testing-library/user-event/dist/type";
import {
  addToConstructorBun,
  addToConstructorFilling,
  deleteFromConstructor,
} from "../../services/actions/index";
import EmptyConstructorElement from "../EmptyConstructorElement/EmptyConstructorElement";
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
  /* const { bun, filling } = useSelector(
    (state) => state.burgerConstructor.currentIngredients
  ); */
  const filling = useSelector((state) => state.burgerConstructor.filling);
  const bun = useSelector((state) => state.burgerConstructor.bun);

  console.log(filling);
  console.log(bun);
  console.log(typeof filling);
  console.log(typeof bun);

  const [{ isHover }, dropTarget] = useDrop(() => ({
    accept: "ingredient",
    /* drop(ingredient) {
      dispatch(addToConstructor(ingredient));
    }, */
    drop(ingredient) {
      ingredient.type === "bun"
        ? dispatch(addToConstructorBun(ingredient))
        : dispatch(addToConstructorFilling(ingredient));
    },
    /*     drop: (ingredient) => {
      if (ingredient.type !== "bun") {
        dispatch(addToConstructorFilling(ingredient));
      } else {
        dispatch(addToConstructorMainbun(ingredient));
      }
    }, */
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  }));

  const classIsHover = isHover ? "onHover" : "none";
  /* const classIsHover = isHover ? "5px solid blue" : "none"; */
  /*   const totalPrice = useMemo(() => {
    return (
      (bun ? bun.price * 2 : 0) +
      filling.reduce((s, v) => s + v.price, 0)
    );
  }, [bun, filling]);
  console.log(totalPrice); */

  return (
    <section className={`${Styles.BurgerConstructor} ml-14`}>
      <section
        сlassName={
          isHover
            ? `${Styles.elements} mt-25 ${Styles.onHover}`
            : `${Styles.elements} mt-25`
        }
        ref={dropTarget}
        className={`${Styles.elements} mt-25`}
      >
        {bun._id ? (
          <div className="mr-4">
            <ConstructorElement
              type="top"
              text={bun.name + "(верх)"}
              price={bun.price}
              thumbnail={bun.image}
              /* key={(bun.id = nanoid())} */
            />
          </div>
        ) : (
          <EmptyConstructorElement
            text={`Вы можете добавить выбранную булку, перетащив ее карточку из ингредиентов сюда.`}
          />
        )}
        {filling.length > 0 ? (
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
                    handleClose={() =>
                      dispatch(deleteFromConstructor(ingredient.id))
                    }
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyConstructorElement
            text={`Вы можете добавить выбранные начинки, перетащив их карточку из ингредиентов сюда.`}
          />
        )}
        {bun._id ? (
          <div className="mr-4">
            <ConstructorElement
              type="bottom"
              text={bun.name + "(низ_"}
              price={bun.price}
              thumbnail={bun.image}
              /* key={(bun.id = nanoid())} */
            />
          </div>
        ) : (
          <EmptyConstructorElement
            text={`Вы можете добавить выбранную булку, перетащив ее карточку из ингредиентов сюда.`}
          />
        )}
      </section>
      {/*       {totalPrice ? (
        <OrderTotal totalPrice={totalPrice} />
      ) : (
        <OrderTotal totalPrice={"0"} />
      )} */}
    </section>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsDataPropTypes.isRequired),
};

export default BurgerConstructor;

/* const [{ isHovered }, ConstructorDrop] = useDrop(() => ({
  accept: "INGREDIENT_NEW",
  drop(item) {
    dispatch(addElementToConstructor(item));
  },
  collect: (monitor) => ({
    isHovered: monitor.isOver(),
  }),
})); 


  const [{ isDragging }, drag] = useDrag(() => ({
    type: "INGREDIENT_NEW",
    item: ingredient,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));*/
