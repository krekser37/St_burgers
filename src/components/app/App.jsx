import React, { useState, useEffect } from "react";
import { IngredientsContext } from "../../services/AppContext";
import "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../appHeader/AppHeader";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import Styles from "./App.module.css";
import { getApiResponse } from "../utils/burger-api.js";

const App = () => {
  const [ingredients, setIngredients] = useState(null);
 
  useEffect(() => {
    getApiResponse()
      .then((result) => {
        setIngredients(result.data);
      })
      .catch((e) => console.log("Ошибка: " + e.message));
  }, []);

  if (!ingredients) {
    return null;
  }
  return (
    <div className={`${Styles.app} p-10`}>
      <AppHeader />
      {ingredients && (
        <main className={Styles.appMain}>
          <IngredientsContext.Provider value={{ingredients}}>
            <BurgerIngredients />
            <BurgerConstructor />
          </IngredientsContext.Provider>
        </main>
      )}
    </div>
  );
};

export default App;
