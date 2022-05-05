import React from "react";
import Styles from "./AppHeader.module.css";
import {
  Logo,
  ProfileIcon,
  ListIcon,
  BurgerIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  return (
    <header className={`${Styles.AppHeader}`}>
      <nav className={`${Styles.AppNav}`}>
        <ul className={`${Styles.headerList}`}>
          <li className={`${Styles.headerButton} pr-5 pl-5 pt-4 pb-4`}>
            <BurgerIcon className={`ml-5`}/>
            <p className={`${Styles.headerText} ml-2`}>Конструктор</p>
          </li>
          <li className={`${Styles.headerButton} pr-5 pl-5 pt-4 pb-4`}>
            <ListIcon />
            <p className={`${Styles.headerText} ml-2 text text_color_inactive`}>Лента заказов</p>
          </li>
        </ul>
     {/*    <div className={Styles.appLogo}> */}
          <Logo />
        {/* </div> */}
        <img src="" alt="" />
        <ul className={`${Styles.headerList}`}>
          <li className={`${Styles.headerButton} pr-5 pl-5 pt-4 pb-4 `}>
            <ProfileIcon />
            <p className={`${Styles.headerText} ml-2 text text_color_inactive`}>Личный кабинет</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
