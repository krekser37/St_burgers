import React from "react";
import Styles from "./feedOrders.module.css";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import OrdersCard from "../OrdersCard/OrdersCard";

export default function FeedOrders() {
  const location = useLocation();
  const orders = useSelector((store) => store.wsOrders.orders);
  /*   let path = isProfile ? '/profile/orders/' : '/feed/'; */
  /*   const handleOpenOrderId = ({order._id}) => {
    dispatch(openOrderId(order._id));
}; */

  return (
    <div className={`${Styles.container}`}>
      {orders?.map((order, index) => {
          return (
            <Link
              to={{
                pathname: `/feed/${order._id}`,
                state: { background: location },
              }}
              /*     onClick={() => handleOpenOrderId(feed._id)} */
              className={`${Styles.FeedLink}`}
              key={order._id}
            >
              <div className={`${Styles.ElementsOrders}`}>
                <OrdersCard order={order} key={index} />
              </div>
            </Link>
          );
        })}
    </div>
  );
}
