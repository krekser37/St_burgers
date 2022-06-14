import React,
{ useEffect } from "react";
import { IngredientsContext } from "../../services/AppContext";
import "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../appHeader/AppHeader";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import Styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import {getIngredients} from "../../../src/services/actions/index";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();
  const ingredients =  useSelector(state => state.ingredients.ingredients);
/* console.log(ingredients); */

  useEffect(() => {
      dispatch(getIngredients());
    },[dispatch],
  );

  if (!ingredients) {
    return null;
  }
  return (
    <div className={`${Styles.app}`}>
      <AppHeader />
      {ingredients && (
        <DndProvider backend={HTML5Backend}>
        <main className={Styles.appMain}>
            {<BurgerIngredients />}
            {<BurgerConstructor />}
        </main>
        </DndProvider>
      )}
    </div>
  );
}

export default App;
