import React, { useMemo } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import Styles from "./BurgerConstructor.module.css";
import ingredientsDataPropTypes from "../../utils/propTypes";
import OrderTotal from "../OrderTotal/OrderTotal";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import {
  addToConstructorBun,
  addToConstructorFilling,
} from "../../services/actions/ingredients";
import EmptyConstructorElement from "../EmptyConstructorElement/EmptyConstructorElement";
import FillingConstructorElement from "../FillingConstructorElement/FillingConstructorElement";

function BurgerConstructor() {
  const dispatch = useDispatch();
  const filling = useSelector((store) => store.burgerConstructor.filling);
  const bun = useSelector((store) => store.burgerConstructor.bun);

/*   console.log(filling);
  console.log(bun);
 */
  const orderIngredients = getOrderIngredients();
  function getOrderIngredients() {
    const orderIngredients = [];
    if (bun !== null) {
      orderIngredients.push(bun);
    }
    filling.forEach((item) => {
      orderIngredients.push(item);
    });
    if (bun !== null) {
      orderIngredients.push(bun);
    }
    return orderIngredients;
  }
  /* console.log(orderIngredients); */

  const [/* { isHover } */, dropTarget] = useDrop(() => ({
    accept: "ingredient",
    drop(ingredient) {
      ingredient.type === "bun"
        ? dispatch(addToConstructorBun(ingredient))
        : dispatch(addToConstructorFilling(ingredient));
    },
/*     collect: (monitor) => ({
      isHover: monitor.isOver(),
    }), */
  }));

 /*  const classIsHover = isHover ? "onHover" : "none"; */
  const totalPrice = useMemo(() => {
    return (bun ? bun.price * 2 : 0) + filling.reduce((s, v) => s + v.price, 0);
  }, [bun, filling]);
  /* console.log(totalPrice); */

  return (
    <section className={`${Styles.BurgerConstructor} ml-14`}>
      <section
/*         сlassName={
          isHover
            ? `${Styles.elements} mt-25 ${Styles.onHover}`
            : `${Styles.elements} mt-25`
        } */
        ref={dropTarget}
        className={`${Styles.elements} mt-25`}
      >
        {bun._id ? (
          <div className="mr-4">
            <ConstructorElement
              type="top"
              isLocked={true}
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
            {filling.map((ingredient, index) => (
              <FillingConstructorElement
                ingredient={ingredient}
                index={index}
                key={ingredient.id}
              />
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
              isLocked={true}
              text={bun.name + "(низ)"}
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
      {totalPrice ? (
        <OrderTotal
          orderIngredients={orderIngredients}
          totalPrice={totalPrice}
        />
      ) : (
        <OrderTotal totalPrice={0} />
      )}
    </section>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsDataPropTypes.isRequired),
};

export default BurgerConstructor;
