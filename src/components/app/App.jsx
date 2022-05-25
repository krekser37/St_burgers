import React,
{ useState, useEffect } from "react";
import { IngredientsContext } from "../../services/AppContext";
import "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../appHeader/AppHeader";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import Styles from "./App.module.css";
import { getApiResponse } from "../utils/burger-api";

function App() {
  const [ingredients, setIngredients] = useState(null);

  function getIngredients() {
    getApiResponse()
      .then((result) => {
        setIngredients(result.data);
      })
      .catch((e) => console.log(e.message));
  }

  useEffect(
    () => {
      getIngredients();
    },
    [],
  );

  if (!ingredients) {
    return null;
  }
  return (
    <div className={`${Styles.app}`}>
      <AppHeader />
      {ingredients && (
        <main className={Styles.appMain}>
          <IngredientsContext.Provider value={ingredients}>
            <BurgerIngredients />
            <BurgerConstructor />
          </IngredientsContext.Provider>
        </main>
      )}
    </div>
  );
}

export default App;
