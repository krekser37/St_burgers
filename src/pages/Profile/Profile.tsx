import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,

} from "react-router-dom";
import Styles from "./profile.module.css";
import { logOut } from "../../services/actions/auth";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import ProfileOrders from "./ProfileOrders/ProfileOrders";
/* import {
  wsConnectionStartOwner,
  wsConnectionClosedOwner,
} from "../../services/actions/wsActionsOwner"; */
import {
  wsConnectionStart,
  wsConnectionClosed,
} from "../../services/actions/wsActions";
import {wsUrlOwner} from "../../utils/burger-api";
import { getCookie } from "../../utils/cookie";
import { useAppDispatch } from "../../services/hooks";
import { Location } from 'history';

const Profile = () => {
  const dispatch = useAppDispatch();
  const location = useLocation<{background: Location}>();
  const background = location?.state?.background;

  const logoutExit = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    /* dispatch(wsConnectionClosed()); */
    const accessToken = getCookie("token");
    dispatch(wsConnectionStart(`${wsUrlOwner}?token=${accessToken}`));
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, [dispatch]);

/*   useEffect(() => {
    dispatch(wsConnectionStartOwner());
    return () => {
      dispatch(wsConnectionClosedOwner());
    };
  }, [dispatch]); */

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
        </Switch>
      </div>
    </>
  );
}

export default Profile;