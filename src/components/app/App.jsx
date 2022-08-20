import React, { useEffect } from "react";
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
import Feed from "../../pages/Feed/Feed";
import { getCookie } from "../../utils/cookie";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";
import { closeIngredientDetails } from "../../services/actions/ingredient-details";
import OrderDetails from "../OrderDetails/OrderDetails";

function App() {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const user = useSelector((store) => store.auth.user);
  const orderNumber  = useSelector(store => store.order.order);
  console.log(orderNumber);
  const cookie = getCookie("token");
  const location = useLocation();
  const background = location?.state?.background;
  /* const background = location.state && location.state.background; */
  const refreshTokenData = localStorage.getItem("refreshToken");
  const tokenSuccess = useSelector((store) => store.auth.tokenSuccess);
  const history = useHistory();

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

  const handleCloseIngredientInModal = () => {
    console.log("click");
    dispatch(closeIngredientDetails());
    history.goBack();
    console.log("close");
  };

  if (!ingredients) {
    <Modal
      title={"Что-то пошло не так."}
      onClose={handleCloseIngredientInModal}
    >
      <p>Попробуйте перезагрузить страницу</p>
    </Modal>;
  }
  return (
    <div className={`${Styles.app}`}>
      <AppHeader />
      <Switch location={background || location}>
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
        <Route path="/feed" exact>
          <Feed />
        </Route>
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders/:id" exact>
          <OrderDetails />
        </ProtectedRoute>
        <Route path="/ingredients/:id">
          <IngredientDetails />
        </Route>
        <Route path="/feed/:id" >
          <OrderDetails />
        </Route>
        <Route path="*" exact={true}>
          <NotFound />
        </Route>
      </Switch>
      {background && (
        <Route path="/ingredients/:id" exact={true}>
          <Modal
            title="Детали ингредиента"
            onClose={handleCloseIngredientInModal}
          >
            <IngredientDetails />
          </Modal>
        </Route>
      )}

      {background && (
        <Route path="/feed/:id" exact={true}>
          <Modal title="" onClose={handleCloseIngredientInModal}>
            <OrderDetails />
          </Modal>
        </Route>
      )}

      {background && (
        <Route path="/profile/orders/:id" exact={true}>
          <Modal title="" onClose={handleCloseIngredientInModal}>
            <OrderDetails />
          </Modal>
        </Route>
      )}
    </div>
  );
}

export default App;
