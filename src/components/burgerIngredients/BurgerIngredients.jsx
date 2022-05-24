import React, { useMemo, useState, useContext }
  from "react";
import Styles from "./BurgerIngredients.module.css";
import IngredientsList from "../IngredientsList/IngredientsList";
import { Tab } from "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
/* import PropTypes from "prop-types";
import ingredientsDataPropTypes from "../utils/propTypes"; */
import { IngredientsContext } from "../../services/AppContext";

function BurgerIngredients() {
  const [current, setCurrent] = useState("buns");
  const selectIngredients = useContext(IngredientsContext);

  const buns = useMemo(
    () => selectIngredients.filter((item) => item.type === "bun"),
    [selectIngredients],
  );

  const sauces = useMemo(
    () => selectIngredients.filter((item) => item.type === "sauce"),
    [selectIngredients],
  );

  const mains = useMemo(
    () => selectIngredients.filter((item) => item.type === "main"),
    [selectIngredients],
  );

  return (
    <section className={`${Styles.BurgerIngredients} mr-10`}>
      <h2 className={`${Styles.title} mt-10 mb-5 text text_type_main-large`}>
        Соберите бургер
      </h2>

      <div className={`${Styles.list}`}>
        <a href="#buns" className={`${Styles.item}`}>
          <Tab active={current === "buns"} onClick={setCurrent}>
            Булки
          </Tab>
        </a>
        <a href="#sauces" className={`${Styles.item}`}>
          <Tab active={current === "sauces"} onClick={setCurrent}>
            Соусы
          </Tab>
        </a>
        <a href="#mains" className={`${Styles.item}`}>
          <Tab active={current === "mains"} onClick={setCurrent}>
            Начинки
          </Tab>
        </a>
      </div>
      <div className={`${Styles.ElementsName}`}>
        <IngredientsList title="Булки" titleId="buns" ingredients={buns} />
        <IngredientsList title="Соусы" titleId="sauces" ingredients={sauces} />
        <IngredientsList title="Начинки" titleId="mains" ingredients={mains} />
      </div>
    </section>
  );
}

/* BurgerIngredients.propTypes = {
  selectIngredients: PropTypes.arrayOf(ingredientsDataPropTypes.isRequired),
}; */

export default BurgerIngredients;
