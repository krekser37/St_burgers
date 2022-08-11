import React, { useEffect, useCallback } from "react";
import "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../appHeader/AppHeader";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import Styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../../src/services/actions/index";
import { getUser, updateToken } from "../../services/actions/auth";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import Register from "../../pages/Register";
import ForgotPassword from "../../pages/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword";
import Profile from "../../pages/Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { getCookie } from "../../utils/cookie";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import IngredientsItem from "../IngregientsItem/IngredientsItem";
import Modal from "../Modal/Modal";
import { closeIngredientDetails } from "../../services/actions/ingredient-details";

function App() {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const user = useSelector((store) => store.auth.user);
  const cookie = getCookie("token");
  const location = useLocation();
  const background = location?.state?.background;
  /* const background = location.state && location.state.background; */
  const refreshTokenData = localStorage.getItem("refreshToken");
  const tokenSuccess = useSelector((store) => store.auth.tokenSuccess);
  const history = useHistory();

  /*  const auth = useSelector((store) => store.auth); */
  /*   console.log(user);
  console.log(refreshTokenData);
  console.log(tokenSuccess);*/
  console.log(location); 
  console.log(background);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  useEffect(() => {
    if (!user && refreshTokenData && cookie) {
      dispatch(getUser());
    }
    if (!cookie && refreshTokenData) {
      dispatch(updateToken());
    }
    if (cookie && tokenSuccess && refreshTokenData && !user) {
      dispatch(getUser());
    }
  }, [dispatch, refreshTokenData, user, cookie, tokenSuccess]);

  /*   const handleCloseIngredientInModal = useCallback(() => {
    dispatch(closeIngredientDetails());
    /* history.replace("/");
    history.goBack();
  }, [dispatch]); */

  const handleCloseIngredientInModal = () => {
    console.log("click");
    dispatch(closeIngredientDetails());
    history.goBack();
    console.log("close");
  };

  if (!ingredients) {
    return null;
  }
  return (
    <div className={`${Styles.app}`}>
      {/*   <Router> */}
      <AppHeader />
{/*       {!background && (
        <Modal
          title={"Что-то пошло не так."}
          onClose={handleCloseIngredientInModal}
        >
          <p>Попробуйте перезагрузить страницу</p>
        </Modal>
      )} */}
      <Switch location={ background || location }>
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
        <Route path="/ingredients/:id">
          <IngredientDetails />
        </Route>

        <Route path="*" exact={true}>
          <NotFound />
        </Route>
      </Switch>

      {/*   </Router> */}

      {background ? (
        <Route path="/ingredients/:id">
          <Modal
            title="Детали ингредиента"
            onClose={handleCloseIngredientInModal}
          >
            <IngredientDetails />
          </Modal>
        </Route>) : (
        <Route path="/ingredients/:id">
          <Modal
          title={"Что-то пошло не так."}
          onClose={handleCloseIngredientInModal}
        >
          <p>Попробуйте перезагрузить страницу</p>
        </Modal>
        </Route>
      )};
    
    </div>
  
  );
}

export default App;
