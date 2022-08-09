import React, {/*  useEffect, */ useState, useRef /* , useCallback  */ } from "react";
/* import { useHistory } from "react-router-dom"; */
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from "./profile.module.css"; 
import { logOut } from "../../services/actions/auth";
import { updateRegistration } from "../../services/actions/auth";

export default function Profile() {
  const user = useSelector(store => store.auth.user);
/* console.log(user.name); */
  const [nameValue, setNameValue] = useState(user.name);
  const [emailValue, setEmailValue] = useState(user.email);
  const [passwordValue, setPasswordValue] = useState("");

  const nameRef = useRef(null);
  const loginRef = useRef(null);
  const passwordRef = useRef(null);

/*   const [showButtons, setShowButtons] = useState(false); */
  const dispatch = useDispatch();
  /*   const history = useHistory(); */
  /*   const register = useCallback(() => {
    history.replace({ pathname: "/register" });
  }, [history]);

  const forgotPassword = useCallback(() => {
    history.replace({ pathname: "/forgot-password" });
  }, [history]); */

/*   useEffect(() => {
    dispatch(getUser());
  }, [dispatch]) */

  const updateUser = (e) => {
    e.preventDefault();
    dispatch (updateRegistration(nameValue, emailValue, passwordValue))
  }

  const cancelUpdateUser = (e) => {
    e.preventDefault();
    setNameValue(user.name);
    setEmailValue(user.email);
    setPasswordValue("");
  }

  const onClickName = () => {
    setTimeout(() => nameRef.current.focus(), 0)
  }

  const onClickEmail = () => {
    setTimeout(() => loginRef.current.focus(), 0)
   }

   const onClickPassword = () => {
    setTimeout(() => passwordRef.current.focus(), 0)
   }

  const logoutExit = () => {
    dispatch(logOut());
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
            type="text"
            placeholder="Имя"
            onChange={(e) => setNameValue(e.target.value)}
            icon="EditIcon"
            value={nameValue}
            name="name"
            error={false}
            ref={nameRef}
            onClick={onClickName}
            errorText="Ошибка"
            size="default"
          />
          <Input
            type="email"
            placeholder="Логин"
            size="default"
            onChange={(e) => setEmailValue(e.target.value)}
            icon="EditIcon"
            value={emailValue}
            name="email"
            error={false}
            ref={loginRef}
            onClick={onClickEmail}
            errorText="Ошибка"
          />
          <Input
            className="text_color_inactive"
            type="password"
            placeholder="Пароль"
            onChange={(e) => setPasswordValue(e.target.value)}
            icon="EditIcon"
            value={passwordValue}
            name="password"
            error={false}
            ref={passwordRef}
            onClick={onClickPassword}
            errorText="Ошибка"
          />
          {/* {showButtons &&  */}
            <div className={Styles.buttons}>
              <Button type="secondary" size="medium" onClick={cancelUpdateUser}>
                Отмена
              </Button>
              <Button type="primary" size="medium" disabled={!(nameValue && emailValue && passwordValue)}>
                Cохранить
              </Button>
            </div> {/* } */}
        </form>
      </div>
    </>
  );
}
