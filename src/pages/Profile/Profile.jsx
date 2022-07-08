import React, { useState/* , useCallback  */} from "react";
/* import { useHistory } from "react-router-dom"; */
import { NavLink } from "react-router-dom";
import {
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from "./profile.module.css";

export default function Profile() {
  const [nameValue, setNameValue] = useState(null);
  const [emailValue, setemailValue] = useState(null);
  const [passwordValue, setpasswordValue] = useState(null);
/*   const history = useHistory(); */
  /*   const register = useCallback(() => {
    history.replace({ pathname: "/register" });
  }, [history]);

  const forgotPassword = useCallback(() => {
    history.replace({ pathname: "/forgot-password" });
  }, [history]); */

  return (
    <>
      <div className={Styles.wrapper}>
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
          >
            Выход
          </NavLink>
        </ul>
        <form action="" className={Styles.form}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => setNameValue(e.target.value)}
            icon={"EditIcon"}
            value={nameValue}
            name={"name"}
            error={false}
            /* ref={inputRef} */
            /* onIconClick={onIconClick} */
            errorText={"Ошибка"}
            size={"default"}
          />
            <Input
            type={"email"}
              size="default"
              onChange={(e) => setemailValue(e.target.value)}
              value={emailValue}
              name={"email"}
              placeholder={"Логин"}
              icon={"EditIcon"}
            />
            <Input
            className="text_color_inactive"
            type={"password"}
              onChange={(e) => setpasswordValue(e.target.value)}
              value={passwordValue}
              name={"password"}
              placeholder={"Пароль"}
              icon={"EditIcon"}
            />
        </form>
        <p
          className={`${Styles.subtitles} text text_type_main-default text_color_inactive`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
    </>
  );
}
