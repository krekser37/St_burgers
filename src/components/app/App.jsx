import React, { useState, useEffect } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
/* import { data } from '../utils/data'; */
import AppHeader from "../appHeader/AppHeader";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import Styles from "./App.module.css";
const baseUrl = "https://norma.nomoreparties.space/api";

const App = () => {
  const [ingredients, setIngredients] = useState(null);

  const getResponseData = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  const getIngredients =() => {
    fetch(`${baseUrl}/ingredients`)
      .then(getResponseData)
      .then(
        (result) => {
          setIngredients(result.data);
      })
  };

  useEffect(() => {
    getIngredients()
  }, []);

if (!ingredients) {
  return null;
} else
  return (
    <div className={`${Styles.app} p-10`}>
      <AppHeader />
      {ingredients && (
        <main className={Styles.appMain}>
          {<BurgerIngredients ingredients={ingredients} />}
          {<BurgerConstructor ingredients={ingredients} />}
        </main>)}
    </div>
  );
}

export default App;
