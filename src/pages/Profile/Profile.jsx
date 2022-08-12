import React, { useState, useRef } from "react";
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
  const user = useSelector((store) => store.auth.user);
  const [nameValue, setNameValue] = useState(user.name);
  const [emailValue, setEmailValue] = useState(user.email);
  const [passwordValue, setPasswordValue] = useState("");

  const nameRef = useRef(null);
  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  const [showButtons, setShowButtons] = useState(false);
  const dispatch = useDispatch();

  const updateUser = (e) => {
    e.preventDefault();
    dispatch(updateRegistration(nameValue, emailValue, passwordValue));
  };

  const cancelUpdateUser = (e) => {
    e.preventDefault();
    setNameValue(user.name);
    setEmailValue(user.email);
    setPasswordValue("");
    setShowButtons(false);
  };

  const onChangeName = (e) => {
    const { value } = e.target;
    setNameValue(value);
    value === user.name ? setShowButtons(false) : setShowButtons(true);
  };

  const onChangeEmail = (e) => {
    const { value } = e.target;
    setEmailValue(value);
    value === user.email ? setShowButtons(false) : setShowButtons(true);
  };

  const onChangePassword = (e) => {
    const { value } = e.target;
    setPasswordValue(value);
    value === user.password ? setShowButtons(false) : setShowButtons(true);
  };

  const onClickName = () => {
    setTimeout(() => nameRef.current.focus(), 0);
    setShowButtons(true);
  };

  const onClickEmail = () => {
    setTimeout(() => loginRef.current.focus(), 0);
    setShowButtons(true);
  };

  const onClickPassword = () => {
    setTimeout(() => passwordRef.current.focus(), 0);
    setShowButtons(true);
  };

  const logoutExit = () => {
    dispatch(logOut());

  };

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
              to='/profile/orders'
              className="text text_type_main-medium text_color_inactive"
              activeClassName={Styles.activeNavLink}
            >
              История заказов
            </NavLink>
            <NavLink
              exact
              to='/login'
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
            onChange={onChangeName}
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
            onChange={onChangeEmail}
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
            onChange={onChangePassword}
            icon="EditIcon"
            value={passwordValue}
            name="password"
            error={false}
            ref={passwordRef}
            onClick={onClickPassword}
            errorText="Ошибка"
          />
          {showButtons && (
            <div className={Styles.buttons}>
              <Button type="secondary" size="medium" onClick={cancelUpdateUser}>
                Отмена
              </Button>
              <Button
                type="primary"
                size="medium" /* disabled={!(nameValue && emailValue && passwordValue)} */
              >
                Cохранить
              </Button>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
