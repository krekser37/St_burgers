import React, { useEffect } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../appHeader/AppHeader";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import Styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients/* , getUser  */} from "../../../src/services/actions/index";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import Register from "../../pages/Register";
import ForgotPassword from "../../pages/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword";
import Profile from "../../pages/Profile/Profile";

function App() {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  /* console.log(ingredients); */

  useEffect(() => {
    dispatch(getIngredients());
  //  dispatch(getUser());
  }, [dispatch]);

  /*   const location = useLocation();
  const background = location.state?.background; */

  if (!ingredients) {
    return null;
  }
  return (
    <div className={`${Styles.app}`}>
      <Router>
      <AppHeader />
        <Switch /* location={background || location} */>
          <Route path="/" exact={true}>
            {ingredients && (
              <DndProvider backend={HTML5Backend}>
                <main className={Styles.appMain}>
                  {<BurgerIngredients />}
                  {<BurgerConstructor />}
                </main>
              </DndProvider>
            )}
          </Route>
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          <Route path="/register" exact={true}>
            <Register />
          </Route>
          <Route path="/forgot-password" exact={true}>
            <ForgotPassword />
          </Route>
           <Route path="/reset-password" exact={true}>
            <ResetPassword/>
          </Route>
            <Route path="/profile" exact={true}>
            <Profile/>
          </Route> 
          {/*           <Route path="/ingredients/:id" exact={true}>
            <Profile>
          </Route> */}

          <Route path="*" exact={true}>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
