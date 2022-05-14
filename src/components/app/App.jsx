import React, { useState, useEffect } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
/* import { data } from '../utils/data'; */
import AppHeader from "../appHeader/AppHeader";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import Styles from "./App.module.css";
import {getApiResponse} from "../Api/Api.js";


const App = () => {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    getApiResponse()
    .then((result) => {
          setIngredients(result.data);
        }
    );
}, []);


if (!ingredients) {
  return null;
}
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
