import React, { useState, useCallback } from "react";
import { useHistory, Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from "./pages.module.css";
import { authorization } from "../services/actions/auth";

export default function Login() {
  const [emailValue, setemailValue] = useState("");
  const [passwordValue, setpasswordValue] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const register = useCallback(() => {
    history.replace({ pathname: "/register" });
  }, [history]);

  const forgotPassword = useCallback(() => {
    history.replace({ pathname: "/forgot-password" });
  }, [history]);

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(authorization(emailValue, passwordValue));
  };

  const user = useSelector((store) => store.auth.user);
  let location = useLocation();

  if (user) {
    return (
      <Redirect
        // Если объект state не является undefined, вернём пользователя назад.
        to={location.state?.from || "/"}
      />
    );
  }

  return (
    <>
      <div className={Styles.container}>
        <form action="" className={Styles.form} onSubmit={submitLogin}>
          <p className="text text_type_main-medium">Войти</p>
          <div className={`${Styles.input} mt-6`}>
            <Input
              size="default"
              onChange={(e) => setemailValue(e.target.value)}
              value={emailValue}
              name={"email"}
              placeholder={"E-mail"}
            />
          </div>
          <div className={`${Styles.input} mt-6`}>
            <PasswordInput
              onChange={(e) => setpasswordValue(e.target.value)}
              value={passwordValue}
              name={"password"}
            />
          </div>
          <div className="mt-6 mb-20">
            <Button type="primary" size="large">
              Войти
            </Button>
          </div>
        </form>
        <p
          className={`${Styles.text} text text_type_main-default text_color_inactive`}
        >
          Вы — новый пользователь?
          <Button type="secondary" size="medium" onClick={register}>
            Зарегистрироваться
          </Button>
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?
          <Button type="secondary" size="medium" onClick={forgotPassword}>
            Восстановить пароль
          </Button>
        </p>
      </div>
      {/* <Navigation /> */}
    </>
  );
}
