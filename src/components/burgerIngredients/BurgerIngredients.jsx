import React, { useMemo, useState } from "react";
import Styles from "./BurgerIngredients.module.css";
import IngredientsList from "../IngredientsList/IngredientsList";
import { Tab } from "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";

const BurgerIngredients = ({ ingredients }) => {
  const [current, setCurrent] = useState("buns");

  const buns = useMemo(
    () => ingredients.filter((item) => item.type === "bun"),
    [ingredients]
  );

  const sauces = useMemo(
    () => ingredients.filter((item) => item.type === "sauce"),
    [ingredients]
  );

  const mains = useMemo(
    () => ingredients.filter((item) => item.type === "main"),
    [ingredients]
  );

  return (
    <section className={`${Styles.BurgerIngredients} mr-10`}>
      <h2 className={`${Styles.title} mt-10 mb-5 text text_type_main-large`}>
        Соберите бургер
      </h2>

      <div className={`${Styles.list}`}>
        <Tab value="buns" active={current === "buns"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauces" active={current === "sauces"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="mains" active={current === "mains"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={`${Styles.ElementsName}`}>
        <IngredientsList title="Булки" titleId="buns" ingredients={buns} />
        <IngredientsList title="Начинки" titleId="mains" ingredients={mains} />
        <IngredientsList title="Соусы" titleId="sauces" ingredients={sauces} />
      </div>
    </section>
  );
};

export default BurgerIngredients;