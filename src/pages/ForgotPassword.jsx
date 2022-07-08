import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from "./pages.module.css";
import { forgotPassword } from "../services/actions/auth";

export default function ForgotPassword() {
  const [emailValue, setemailValue] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const login = useCallback(() => {
    history.replace({ pathname: "/login" });
  }, [history]);

  const sentForgotPassword = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(emailValue));
/*     dispatch(setForgotPasswordState(true)); */
    setemailValue("");
    history.push('/reset-password');
  }

  return (
    <>
      <div className={Styles.container}>
        <form action="" className={Styles.form} onSubmit={sentForgotPassword}>
          <p className="text text_type_main-medium">Восстановление пароля</p>
          <div className={`${Styles.input} mt-6`}>
            <Input
              size="default"
              onChange={(e) => setemailValue(e.target.value)}
              value={emailValue}
              name={"email"}
              placeholder={"Укажите e-mail"}
            />
          </div>
          <div className="mt-6 mb-20">
            <Button type="primary" size="large" disabled={!(emailValue)}>
              Восстановить
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
