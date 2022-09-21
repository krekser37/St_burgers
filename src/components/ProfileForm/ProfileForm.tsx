import React, {
  useState,
  useRef,
  FormEvent,
  FC,
  ChangeEvent,
  SyntheticEvent,
  useEffect,
} from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { updateRegistration } from "../../services/actions/auth";
import Styles from "./profileForm.module.css";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { TUser } from "../../services/types/types";

const ProfileForm: FC = () => {
  const {user} = useAppSelector((store) => store.auth.user) as {user: TUser};
  console.log(user);

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState("");

  const nameRef = useRef(null);
  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  const [showButtons, setShowButtons] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      setNameValue(user.name);
      setEmailValue(user.email);
    }
  }, [user]);

  const updateUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateRegistration(nameValue, emailValue, passwordValue));
  };
  /*   onClick?: (() => void) | ((e: SyntheticEvent) => void) | undefined; */
  const cancelUpdateUser = (e: SyntheticEvent): void => {
    e.preventDefault();
    setNameValue(nameValue);
    setEmailValue(emailValue);
    setPasswordValue("");
    setShowButtons(false);
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setNameValue(value);
    value === user?.name ? setShowButtons(false) : setShowButtons(true);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmailValue(value);
    value === user?.email ? setShowButtons(false) : setShowButtons(true);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPasswordValue(value);
    value === user?.password ? setShowButtons(false) : setShowButtons(true);
  };

  const onClickName = () => {
    setShowButtons(true);
  };

  const onClickEmail = () => {
    setShowButtons(true);
  };

  const onClickPassword = () => {
    setShowButtons(true);
  };

  return (
    <form action="" className={Styles.form} onSubmit={updateUser}>
      <Input
        type="text"
        placeholder="Имя"
        onChange={onChangeName}
        icon="EditIcon"
        value={nameValue}
        name="name"
        error={false}
        ref={nameRef}
        onFocus={onClickName}
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
        onFocus={onClickEmail}
        errorText="Ошибка"
      />
      <Input
        type="password"
        placeholder="Пароль"
        onChange={onChangePassword}
        icon="EditIcon"
        value={passwordValue}
        name="password"
        error={false}
        ref={passwordRef}
        onFocus={onClickPassword}
        errorText="Ошибка"
      />
      {showButtons && (
            <div className={Styles.buttons}>
            <Button
              type="secondary"
              size="medium"
              onClick={cancelUpdateUser} /* children={ React.ReactNode} */
            >
              Отмена
            </Button>
            <Button type="primary" size="medium">
              Cохранить
            </Button>
            </div>
      )}
    </form>
  );
};

/* type TButton = {
  name: string;
  country: string;
  children: React.ReactNode;
};

// 👇️ using React.FunctionComponent
const Button: React.FC<TButton> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
}; */

export default ProfileForm;
