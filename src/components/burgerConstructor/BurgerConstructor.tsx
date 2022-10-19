import React, { FC, useMemo } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from "./BurgerConstructor.module.css";
import OrderTotal from "../OrderTotal/OrderTotal";
import { useDrop } from "react-dnd";
import {
  addToConstructorBun,
  addToConstructorFilling,
} from "../../services/actions/burgerConstructor";
import EmptyConstructorElement from "../EmptyConstructorElement/EmptyConstructorElement";
import FillingConstructorElement from "../FillingConstructorElement/FillingConstructorElement";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { TIngredient } from "../../services/types/types";

const BurgerConstructor:FC = () => {
  const dispatch = useAppDispatch();
  const filling = useAppSelector((store) => store.burgerConstructor.filling);
  const bun = useAppSelector((store) => store.burgerConstructor.bun);

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

  const [, dropTarget] = useDrop(() => ({
    accept: "ingredient",
    drop(ingredient: TIngredient) {
      ingredient.type === "bun"
        ? dispatch(addToConstructorBun(ingredient))
        : dispatch(addToConstructorFilling(ingredient));
    },
  }));

  const totalPrice = useMemo(() => {
    return (bun ? bun.price * 2 : 0) + filling.reduce((s, v) => s + v.price, 0);
  }, [bun, filling]);

  return (
    <section className={`${Styles.BurgerConstructor} ml-14`}>
      <section
        ref={dropTarget}
        className={`${Styles.elements} mt-25`}
      >
        {bun?._id  ? (
          <div className="mr-4">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun.name + "(верх)"}
              price={bun.price}
              thumbnail={bun.image}
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
        {bun?._id ? (
          <div className="mr-4">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={bun.name + "(низ)"}
              price={bun.price}
              thumbnail={bun.image}
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
        <OrderTotal orderIngredients={orderIngredients} totalPrice={0} />
      )}
    </section>
  );
}

export default BurgerConstructor;
