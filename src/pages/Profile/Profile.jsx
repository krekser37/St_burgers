import React, { useEffect, useState /* , useCallback  */ } from "react";
/* import { useHistory } from "react-router-dom"; */
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from "./profile.module.css";
import { getUser } from "../../services/actions/auth"; 
import { logOut } from "../../services/actions/auth";

export default function Profile() {
  const user = useSelector(store => store.auth.user);
/* console.log(user.name); */
  const [nameValue, setNameValue] = useState(user.name);
  const [emailValue, setEmailValue] = useState(user.email);
  const [passwordValue, setPasswordValue] = useState("");

  const [showButtons, setShowButtons] = useState(false);
  const dispatch = useDispatch();
  /*   const history = useHistory(); */
  /*   const register = useCallback(() => {
    history.replace({ pathname: "/register" });
  }, [history]);

  const forgotPassword = useCallback(() => {
    history.replace({ pathname: "/forgot-password" });
  }, [history]); */

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch])

  const updateUser = (e) => {
    e.preventDefault();
  }

/*   const cancelUpdateUser = (e) => {
    e.preventDefault();
    setNameValue(user.name);
    setEmailValue(user.email);
    setPasswordValue("");
    setShowButtons(false);
  } */

  const onClickName = () => {
   /*  e.preventDefault(); */
   setShowButtons(true);
  }

  const onClickEmail = () => {
    /*  e.preventDefault(); */
    setShowButtons(true);
   }

   const onClickPassword = () => {
    /*  e.preventDefault(); */
    setShowButtons(true);
   }

  const logoutExit = () => {
    const refreshToken = localStorage.getItem('token');
    dispatch(logOut(refreshToken));
  }


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
              to="/profile/order"
              className="text text_type_main-medium text_color_inactive"
              activeClassName={Styles.activeNavLink}
            >
              История заказов
            </NavLink>
            <NavLink
              exact
              to="/"
              className="text text_type_main-medium text_color_inactive"
              onClick={logoutExit}
            >
              Выход
            </NavLink>
          </ul>
          <p
            className={`${Styles.subtitles} text text_type_main-default text_color_inactive`}
          >
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        <form action="" className={Styles.form} onClick={updateUser}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => setNameValue(e.target.value)}
            icon={"EditIcon"}
            value={nameValue}
            name={"name"}
            error={false}
            /* ref={inputRef} */
            onClick={onClickName}
            errorText={"Ошибка"}
            size={"default"}
          />
          <Input
            type={"email"}
            size="default"
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
            name={"email"}
            placeholder={"Логин"}
            icon={"EditIcon"}
            onClick={onClickEmail}
          />
          <Input
            className="text_color_inactive"
            type={"password"}
            onChange={(e) => setPasswordValue(e.target.value)}
            value={passwordValue}
            name={"password"}
            placeholder={"Пароль"}
            icon={"EditIcon"}
            onClick={onClickPassword}
          />
          {showButtons && 
            <div className={Styles.buttons}>
              <Button type="secondary" size="medium" /* onClick={cancelUpdateUser} */>
                Отмена
              </Button>
              <Button type="primary" size="medium">
                Cохранить
              </Button>
            </div> }
        </form>
      </div>
    </>
  );
}
