import React , { FC }from "react";
import Styles from "./AppHeader.module.css";
import {
  Logo,
  ProfileIcon,
  ListIcon,
  BurgerIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";

const AppHeader: FC = () => {
  return (
    <header className={`${Styles.AppHeader}`}>
      <nav className={`${Styles.AppNav}`}>
        <ul className={`${Styles.headerList}`}>
          <NavLink
            to="/"
            activeClassName={Styles.activeNavLink}
            className={`${Styles.headerButton} text text_type_main-default text_color_inactive pr-5 pl-5 pt-4 pb-4 `}
          >
            <BurgerIcon type="primary"/>
            <span className="text_color_inactive ml-2">Конструктор</span>
          </NavLink>
          <NavLink
            to="/feed"
            activeClassName={Styles.activeNavLink}
            className={`${Styles.headerButton} text text_type_main-default text_color_inactive pr-5 pl-5 pt-4 pb-4 `}
          >
            <ListIcon type="primary"/>
            <span className="text_color_inactive  ml-2">Лента заказов</span>
          </NavLink>
        </ul>
        <NavLink exact to="/">
          <Logo  />
        </NavLink>
        <img src="" alt="" />
        <ul className={`${Styles.headerList}`}>
          <NavLink
            to="/profile"
            exact
            activeClassName={Styles.activeNavLink}
            className={`${Styles.headerButton} text text_type_main-default text_color_inactive pr-5 pl-5 pt-4 pb-4 `}
          >
            <ProfileIcon type="primary"/>
            <span className="text_color_inactive ml-2">Личный кабинет</span>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
