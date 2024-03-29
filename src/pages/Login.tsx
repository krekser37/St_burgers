import React, { FC, useState, FormEvent } from "react";
import { Redirect, useLocation, Link } from "react-router-dom";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from "./pages.module.css";
import { authorization } from "../services/actions/auth";
import { useAppDispatch, useAppSelector } from "../services/hooks";

const Login: FC = ()=> {
  const [emailValue, setemailValue] = useState("");
  const [passwordValue, setpasswordValue] = useState("");
  const dispatch = useAppDispatch();

  const submitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authorization(emailValue, passwordValue));
  };
  const location = useLocation<{from: string}>();

  const user = useAppSelector((store) => store.auth.user);

  if (user) {
    return (
      <Redirect
        // Если объект state не является undefined, вернём пользователя назад.
        to={location?.state?.from || "/"}
      />
    );
  }

  return (
      <div className={Styles.container}>
        <h2 className="text text_type_main-medium">Вход</h2>
        <form className={Styles.form} onSubmit={submitLogin}>
          <div className={`${Styles.input} mt-6`}>
            <Input
              size="default"
              onChange={(e) => setemailValue(e.target.value)}
              value={emailValue}
              name="email"
              placeholder="E-mail"
              type="email"
              error={false}
              errorText="Ошибка"
            />
          </div>
          <div className={`${Styles.input} mt-6`}>
            <PasswordInput
              onChange={(e) => setpasswordValue(e.target.value)}
              value={passwordValue}
              name="password"
              size="default"
            />
          </div>
          <div className="mt-6 mb-20">
            <Button
              type="primary"
              size="large"
              disabled={!(emailValue && passwordValue)}
            >
              Войти
            </Button>
          </div>
        </form>
        <span className="text text_type_main-default text_color_inactive">
          Вы — новый пользователь?
          <Link className={Styles.linkLogin} to="/register">
            Зарегистрироваться
          </Link>
        </span>
        <span className="text text_type_main-default text_color_inactive mt-4">
          Забыли пароль?
          <Link className={Styles.linkLogin} to="/forgot-password">
            Восстановить пароль
          </Link>
        </span>
      </div>
  );
}
export default  Login;