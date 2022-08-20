import React from "react";
import Styles from "./profileOrders.module.css";
import { Link, useLocation } from "react-router-dom";
import OrdersCard from "../../../components/OrdersCard/OrdersCard";
import { useSelector } from "react-redux";

export default function ProfileOrders() {
  const location = useLocation();
/*   const wsOrdersOwner = useSelector((store) => store.wsOrdersOwner); */
  const orders = useSelector((store) => store.wsOrdersOwner.orders);
  /*   const total = useSelector((store) => store.wsOrders.total);
  const totalToday = useSelector((store) => store.wsOrders.totalToday); */

  console.log(orders);

  return (
    <div className={`${Styles.container}`}>
      <div className={`${Styles.ElementsOrders}`}>
        {orders.length > 0 ? (
          orders.map((order, index) => {
            return (
              <Link
                to={{
                  pathname: `/profile/orders/${order._id}`,
                  state: { background: location },
                }}
                className={`${Styles.FeedLink}`}
                key={order._id}
              >
                <OrdersCard order={order} status={true} key={index} />
              </Link>
            );
          })
        ) : (
          <div className={`${Styles.container_empty}`}>
            <p className={`text text_type_main-medium mt-8`}>
              Вы еще не сделали ни одного заказа
            </p>
            <p className={`text text_type_main-large mt-8`}>
              Пожалуйста, сделайте заказ
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
