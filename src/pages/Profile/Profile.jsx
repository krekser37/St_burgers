import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import Styles from "./profile.module.css";
import { logOut } from "../../services/actions/auth";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import ProfileOrders from "./ProfileOrders/ProfileOrders";
import {
  wsConnectionStartOwner,
  wsConnectionClosedOwner,
} from "../../services/actions/wsActionsOwner";
import OrderDetails from "../../components/OrderDetails/OrderDetails";

export default function Profile() {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location?.state?.background;

  const logoutExit = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    dispatch(wsConnectionStartOwner());
    return () => {
      dispatch(wsConnectionClosedOwner());
    };
  }, [dispatch]);

  return (
    <>
      <div className={Styles.wrapper}>
        <div>
          <ul className={`${Styles.nav}`}>
            <NavLink
              className="text text_type_main-medium text_color_inactive"
              exact
              to="/profile"
              activeClassName={Styles.activeNavLink}
            >
              Профиль
            </NavLink>
            <NavLink
              exact
              to="/profile/orders"
              className="text text_type_main-medium text_color_inactive"
              activeClassName={Styles.activeNavLink}
            >
              История заказов
            </NavLink>
            <NavLink
              exact
              to="/login"
              className="text text_type_main-medium text_color_inactive"
              onClick={logoutExit}
            >
              Выход
            </NavLink>
          </ul>
          <p
            className={`${Styles.subtitles} text text_type_main-default text_color_inactive mb-7`}
          >
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        <Switch location={background || location}>
          <Route exact path="/profile">
            <ProfileForm />
          </Route>
          <Route exact path="/profile/orders">
            <ProfileOrders />
          </Route>
{/*           <Route path="/profile/orders/:id" exact>
            <OrderDetails />
          </Route> */}
        </Switch>
      </div>
    </>
  );
}
