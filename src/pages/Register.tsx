import React, { FC, useState, FormEvent } from "react";
import { Link , Redirect} from "react-router-dom";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from "./pages.module.css";
import { registration } from "../services/actions/auth";
import { useAppDispatch, useAppSelector } from "../services/hooks";

 const Register: FC = () =>{
  const user = useAppSelector(store => store.auth.user);
  const [emailValue, setemailValue] = useState("");
  const [passwordValue, setpasswordValue] = useState("");
  const [nameValue, setnameValue] = useState("");

  const dispatch = useAppDispatch();

  const userRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registration(nameValue, emailValue, passwordValue));
  };

  if (user) {
    return (
        <Redirect to={ '/'} />
    );
}

  return (
    <>
      <div className={Styles.container}>
        <form action="" className={Styles.form} onSubmit={userRegister}>
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
            <EmailInput
              size="default"
              onChange={(e) => setemailValue(e.target.value)}
              value={emailValue}
              name={"email"}
/*               placeholder={"E-mail"} */
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
            <Button type="primary" size="large" disabled={! (nameValue && emailValue && passwordValue)} >
              Зарегистрироваться
            </Button>
          </div>
        </form>

        <div className={`${Styles.textLink}`}>
          <span className="text text_type_main-default text_color_inactive">
            Уже зарегистрированы?
          </span>
          <Link className={Styles.buttonLink} to="/login">
            Войти
          </Link>
        </div>
      </div>
    </>
  );
}
export default  Register;