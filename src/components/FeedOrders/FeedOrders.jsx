import React from "react";
import Styles from "./feedOrders.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import { idText } from "typescript";

export default function FeedOrders() {

  const location = useLocation();
/*   let path = isProfile ? '/profile/orders/' : '/feed/'; */
/*   const handleOpenOrderId = ({order._id}) => {
    dispatch(openOrderId(order._id));
}; */

  return (
    <Link
    to={{
      pathname: `/feed/:id`,
/*       pathname: path + `${order._id}`, */
      state: { background: location }
    }}
/*     onClick={() => handleOpenOrderId(feed._id)} */
    className={`${Styles.FeedLink}`}
    >
    <section className={`${Styles.feedOrders} p-6 mr-2`}>
      <div className={`${Styles.order} mb-6`}>
        <p className="text text_type_digits-default">#034535</p>
        <p className="text text_type_main-default text_color_inactive">
          Сегодня, 16:20 i-GMT+3
        </p>
      </div>
      <h2 className="text text_type_main-large mb-6">
        Death Star Starship Main бургер
      </h2>
      <div className={`${Styles.IngredientsPrice} `}>
        <ul className={`${Styles.Ingredients} `}>
          <li className={`${Styles.Ingredient} `} style={{ zIndex: 9 }}>
            <img className={Styles.image} /* src={image} alt={name} */ />
          </li>
          <li className={`${Styles.Ingredient} `} style={{ zIndex: 9 }}>
            <img className={Styles.image} /* src={image} alt={name} */ />
          </li>
          <li className={`${Styles.Ingredient} `} style={{ zIndex: 9 }}>
            <img className={Styles.image} /* src={image} alt={name} */ />
          </li>
          <li className={`${Styles.Ingredient} `} style={{ zIndex: 9 }}>
            <img className={Styles.image} /* src={image} alt={name} */ />
          </li>
          <li className={`${Styles.Ingredient_last} `} style={{ zIndex: 9 }}>
            <img className={Styles.image} /* src={image} alt={name} */ />
          </li>
        </ul>
        <div className={`${Styles.Price} ml-6`}>
          <p className="text text_type_digits-default">480</p>
          <CurrencyIcon />
        </div>
      </div>
    </section>
    </Link>
  );
}
