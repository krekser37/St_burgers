import React, {
  useMemo,
  useState,
  useEffect,
} from "react";
import Styles from "./BurgerIngredients.module.css";
import IngredientsList from "../IngredientsList/IngredientsList";
import { Tab } from "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

function BurgerIngredients() {
  const [current, setCurrent] = useState("buns");
  const [bunsRef, inViewBuns] = useInView({ threshold: 1 });
  const [saucesRef, inViewSauces] = useInView({ threshold: 0.5 });
  const [mainsRef, inViewMains] = useInView({ threshold: 0.5 });

  const ingredients = useSelector((state) => state.ingredients.ingredients);
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
  useEffect(() => {
    if (inViewBuns) {
      setCurrent("buns");
    } else if (inViewSauces) {
      setCurrent("sauces");
    } else if (inViewMains) {
      setCurrent("mains");
    }
  }, [inViewBuns, inViewMains, inViewSauces]);

  const switchTab = (tab) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={`${Styles.BurgerIngredients} mr-10`}>
      <h2 className={`${Styles.title} mt-10 mb-5 text text_type_main-large`}>
        Соберите бургер
      </h2>
      <div className={`${Styles.list}`}>
        <a href="#buns" className={`${Styles.item}`}>
          <Tab
          inViewBuns={inViewBuns}
            value={"buns"}
            active={current === "buns"}
            onClick={switchTab}
          >
            Булки
          </Tab>
        </a>
        <a href="#sauces" className={`${Styles.item}`}>
          <Tab
          inViewSauces={inViewSauces}
            value={"sauces"}
            active={current === "sauces"}
            onClick={switchTab}
          >
            Соусы
          </Tab>
        </a>
        <a href="#mains" className={`${Styles.item}`}>
          <Tab
          inViewMains={inViewMains}
            value={"mains"}
            active={current === "mains"}
            onClick={switchTab}
          >
            Начинки
          </Tab>
        </a>
      </div>
      <div
        className={`${Styles.ElementsName}`}
      >
        <IngredientsList
          ref={bunsRef}
          title="Булки"
          titleId="buns"
          ingredients={buns}
        />
        <IngredientsList
          ref={saucesRef}
          title="Соусы"
          titleId="sauces"
          ingredients={sauces}
        />
        <IngredientsList
          ref={mainsRef}
          title="Начинки"
          titleId="mains"
          ingredients={mains}
        />
      </div>
    </section>
  );
}

/* BurgerIngredients.propTypes = {
  selectIngredients: PropTypes.arrayOf(ingredientsDataPropTypes.isRequired),
}; */

export default BurgerIngredients;
