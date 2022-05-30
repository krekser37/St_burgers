import React, { useMemo, useState, useContext, useRef } from "react";
import Styles from "./BurgerIngredients.module.css";
import IngredientsList from "../IngredientsList/IngredientsList";
import { Tab } from "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
/* import PropTypes from "prop-types";
import ingredientsDataPropTypes from "../utils/propTypes"; */
import { IngredientsContext } from "../../services/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { SET_CURRENT_TAB } from "../../services/actions/index";
import { setCurrentTab } from "../../services/actions/index";

function BurgerIngredients() {
  const [current, setCurrent] = useState("buns");
  /*  const selectIngredients = useContext(IngredientsContext); */

  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  //const current = useSelector((state) => state.ingredients.currentTab);
  console.log(current);
  const bunsSection = useRef(null);
  const saucesSection = useRef(null);
  const mainsSection = useRef(null);

  /*   const switchTab = (id) => {
    setCurrentTab(id);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  } */
  const switchTab = (type, ref) => {
    setCurrent(type);
    if (!ref.current) return null;
    else {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <a href="#buns" className={`${Styles.item}`}>
          <Tab
            active={current === "buns"}
            onClick={() => {
              switchTab("buns", bunsSection);
            }}
          >
            Булки
          </Tab>
        </a>
        <a href="#sauces" className={`${Styles.item}`}>
          <Tab
            active={current === "sauces"}
            onClick={() => {
              switchTab("sauces", saucesSection);
            }}
          >
            Соусы
          </Tab>
        </a>
        <a href="#mains" className={`${Styles.item}`}>
          <Tab
            active={current === "mains"}
            onClick={() => {
              switchTab("mains", mainsSection);
            }}
          >
            Начинки
          </Tab>
        </a>
      </div>
      <div className={`${Styles.ElementsName}`}>
        <IngredientsList
          listRef={bunsSection}
          title="Булки"
          titleId="buns"
          ingredients={buns}
          id="buns"
        />
        <IngredientsList
          listRef={saucesSection}
          title="Соусы"
          titleId="sauces"
          ingredients={sauces}
          id="sauces"
        />
        <IngredientsList
          listRef={mainsSection}
          title="Начинки"
          titleId="mains"
          ingredients={mains}
          id="mains"
        />
      </div>
    </section>
  );
}

/* BurgerIngredients.propTypes = {
  selectIngredients: PropTypes.arrayOf(ingredientsDataPropTypes.isRequired),
}; */

export default BurgerIngredients;
