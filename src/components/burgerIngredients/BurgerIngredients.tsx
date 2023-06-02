import React, {
  FC,
  useMemo,
  useState,
  useEffect,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";
import Styles from "./BurgerIngredients.module.css";
import IngredientsList from "../IngredientsList/IngredientsList";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import { useInView } from "react-intersection-observer";
import { useAppSelector } from "../../services/hooks";

export interface IBurgerIngredients
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const BurgerIngredients: FC<IBurgerIngredients> = () => {
  const [current, setCurrent] = useState<string>("buns");
  const [bunsRef, inViewBuns] = useInView({ threshold: 1 });
  const [saucesRef, inViewSauces] = useInView({ threshold: 0.5 });
  const [mainsRef, inViewMains] = useInView({ threshold: 0.5 });

  const ingredients = useAppSelector((state) => state.ingredients.ingredients);
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

  const switchTab = (tab: string) => {
    setCurrent(tab);
    const element: HTMLElement | null = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={`${Styles.BurgerIngredients} mr-10`}>
      <h2 className={`${Styles.title} mt-10 mb-5 text text_type_main-large`}>
        Соберите бургер
      </h2>
      <div className={`${Styles.list}`}>
        <a href="#buns" className={`${Styles.item}`}>
          <Tab
            active={current === "buns"}
            value={"buns"}
            onClick={() => switchTab("bun")}
          >
            Булки
          </Tab>
        </a>
        <a href="#sauces" className={`${Styles.item}`}>
          <Tab
            active={current === "sauces"}
            value={"sauces"}
            onClick={() => switchTab("sauces")}
          >
            Соусы
          </Tab>
        </a>
        <a href="#mains" className={`${Styles.item}`}>
          <Tab active={current === "mains"} value={"mains"} onClick={() => switchTab("mains")}>
            Начинки
          </Tab>
        </a>
      </div>
      <div className={`${Styles.ElementsName}`}>
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
};

export default BurgerIngredients;
