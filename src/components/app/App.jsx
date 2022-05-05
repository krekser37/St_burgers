import React from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import { data } from '../utils/data';
import AppHeader from "../appHeader/AppHeader";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import Styles from "./App.module.css";

function App() {
  return (
    <div className={`${Styles.app} p-10`}>
      <AppHeader />
      <section className={Styles.appMain}>
        {<BurgerIngredients ingredients={data}/>} 
        {<BurgerConstructor ingredients={data}/>}
      </section>
    </div>
  );
}

export default App;
