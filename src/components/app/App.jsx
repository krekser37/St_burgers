import React, { useEffect } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../appHeader/AppHeader";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import Styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getIngredients
} from "../../../src/services/actions/index";
import { getUser } from "../../services/actions/auth";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import Register from "../../pages/Register";
import ForgotPassword from "../../pages/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword";
import Profile from "../../pages/Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {getCookie} from "../utils/cookie";

function App() {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const user = useSelector(store => store.auth.user);
  const cookie = getCookie('token');
/*   const location = useLocation();
  const history = useHistory(); */
  const refreshTokenData = localStorage.getItem('token');
console.log(user);

  useEffect(() => {
    dispatch(getIngredients());
/*     dispatch(getUser()); */
  }, [dispatch]);

  useEffect(() => {
    if (!user && refreshTokenData && cookie) {
      dispatch(getUser())
    }
  }, [dispatch, user, refreshTokenData, cookie]);

/*   useEffect(() => {
    if (!user && refreshTokenData && cookie) {
      dispatch(getUser());
    }
    if (!cookie && refreshTokenData) {
      dispatch(refreshToken());
    }
    if (cookie && updateTokenSuccess && refreshTokenData && !user) {
      dispatch(getUser());
    }
  }, [dispatch, refreshTokenData, user, cookie, updateTokenSuccess]); */

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
            <ResetPassword />
          </Route>
          <ProtectedRoute path="/profile">
            <Profile />
          </ProtectedRoute>
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
