import React, { FC, useState, FormEvent } from "react";
import {  useHistory, Link, Redirect } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from "./pages.module.css";
import { resetPassword } from "../services/actions/auth";
import { useAppDispatch, useAppSelector } from "../services/hooks";

const ResetPassword: FC = () => {
  const user = useAppSelector((store) => store.auth.user);
  const forgotPasswordSuccess = useAppSelector((store) => store.auth.forgotPasswordSuccess)
  const [passwordValue, setpasswordValue] = useState("");
  const [token, setToken] = useState("");

  const history = useHistory();
  const dispatch = useAppDispatch();

  const sentResetPassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetPassword(passwordValue, token));
    setpasswordValue("");
    setToken("");
    history.push("/profile");
  };
  
  if (user) {
    return <Redirect to={"/"} />;
  }

	if (!forgotPasswordSuccess) {
		return <Redirect to={"/forgot-password"} />;
	}

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
              icon="EditIcon"
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
          <Link
            className={Styles.linkLogin}
            type="secondary"
            to="/login"
          >
            Войти
          </Link>
        </p>
      </div>
    </>
  );
}

export default ResetPassword;
