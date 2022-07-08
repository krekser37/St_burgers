import React, { useState, useCallback } from "react";
import { useHistory } from 'react-router-dom';
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from "./pages.module.css";

export default function Register() {
  const [emailValue, setemailValue] = useState(null);
  const [passwordValue, setpasswordValue] = useState(null);
  const [nameValue, setnameValue] = useState(null);


  const history = useHistory();
  const login = useCallback(
    () => {
        history.replace({ pathname: '/login' });
    },
    [history]
  );

  return (
    <>
      <div className={Styles.container}>
        <form action="" className={Styles.form}>
          <p className="text text_type_main-medium">Регистрация</p>
          <div className={`${Styles.input} mt-6`}>
            <Input
              size="default"
              onChange={(e) => setnameValue(e.target.value)}
              value={nameValue}
              name={"name"}
              placeholder={"Имя"}
            />
          </div>
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
              Зарегистрироваться
            </Button>
          </div>
        </form>
        <p
          className={`${Styles.text} text text_type_main-default text_color_inactive`}
        >
         Уже зарегистрированы?
          <Button type="secondary" size="medium" onClick={login}>
            Войти
          </Button>
        </p>
      </div>
      {/* <Navigation /> */}
    </>
  );
}
