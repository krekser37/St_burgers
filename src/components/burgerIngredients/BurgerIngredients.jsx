import React from "react";
import { useState } from "react";
import Styles from "./BurgerIngredients.module.css";
import Ingredients from "../ingredients/Ingredients";
import { Tab } from "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";


const BurgerIngredients = ({ ingredients }) => {
  const [current, setCurrent] = useState("bun");

  
    return (
      <section className={`${Styles.BurgerIngredients} mr-10`}>
        <h2 className={`${Styles.title} mt-10 mb-5 text text_type_main-large`}>
          Соберите бургер
        </h2>
        <ul className={`${Styles.list} mb-10`}>
          <li>
            <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
              Булки
            </Tab>
          </li>
          <li>
            <Tab
              value="sauce"
              active={current === "sauce"}
              onClick={setCurrent}
            >
              Соусы
            </Tab>
          </li>
          <li>
            <Tab
              value="filling"
              active={current === "filling"}
              onClick={setCurrent}
            >
              Начинки
            </Tab>
          </li>
        </ul>
        <section className={`${Styles.ElementsName}`}>
          <h3 className={`${Styles.subtitle} text text_type_main-medium`}>
            Булки
          </h3>
          {<Ingredients ingredients={ingredients}/>} 
          <h3 className={`${Styles.subtitle} text text_type_main-medium`}>
            Соусы
          </h3>
          {<Ingredients ingredients={ingredients}/>}
          <h3 className={`${Styles.subtitle} text text_type_main-medium`}>
            Начинки
          </h3>
          {<Ingredients ingredients={ingredients}/>}
        </section>
      </section>
    );

};

export default BurgerIngredients;
