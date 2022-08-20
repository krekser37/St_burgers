import React from "react";
import Styles from "./feedOrders.module.css";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import OrdersCard from "../OrdersCard/OrdersCard";


export default function FeedOrders() {
  const location = useLocation();
  const orders = useSelector((store) => store.wsOrders.orders);

  return (
    <div className={`${Styles.container}`}>
      <div className={`${Styles.ElementsOrders}`}>
      {orders?.map((order, index) => {
        return (
          <Link
            to={{
              pathname: `/feed/${order._id}`,
              state: { background: location },
            }}
                /* onClick={() => handleOpenOrderId(order._id)} */
            className={`${Styles.FeedLink}`}
            key={order._id}
          >
            
              <OrdersCard order={order} status={false} key={index} />
          </Link>
        );
      })}
      </div>
    </div>
  );
}
