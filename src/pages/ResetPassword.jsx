import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from "./pages.module.css";
import { resetPassword } from "../services/actions/auth";

export default function ResetPassword() {
  const [passwordValue, setpasswordValue] = useState("");
  const [token, setToken] = useState("");
  const [icon, setIcon] = useState("ShowIcon");
  const history = useHistory();
  const dispatch = useDispatch();

  const login = useCallback(() => {
    history.replace({ pathname: "/login" });
  }, [history]);

  const sentResetPassword = (e) => {
    e.preventDefault();
    dispatch(resetPassword(passwordValue, token));
    /*     dispatch(setForgotPasswordState(true)); */
    setpasswordValue("");
    setToken("");
    history.push("/reset-password");
  };

  return (
    <>
      <div className={Styles.container}>
        <form action="" className={Styles.form} onSubmit={sentResetPassword}>
          <p className="text text_type_main-medium">Восстановление пароля</p>
          <div className={`${Styles.input} mt-6`}>
            <Input
              size="default"
              onChange={(e) => setpasswordValue(e.target.value)}
              value={passwordValue}
              name={"email"}
              placeholder={"Введите новый пароль"}
              icon={icon}
            />
          </div>
          <div className={`${Styles.input} mt-6`}>
            <Input
              size="default"
              onChange={(e) => setToken(e.target.value)}
              value={token}
              name={"token"}
              placeholder={"Введите код из письма"}
            />
          </div>
          <div className="mt-6 mb-20">
            <Button
              type="primary"
              size="large"
              disabled={!passwordValue || !token}
            >
              Сохранить
            </Button>
          </div>
        </form>
        <p
          className={`${Styles.text} text text_type_main-default text_color_inactive`}
        >
          Вспомнили пароль?
          <Button type="secondary" size="medium" onClick={login}>
            Войти
          </Button>
        </p>
      </div>
      {/* <Navigation /> */}
    </>
  );
}
