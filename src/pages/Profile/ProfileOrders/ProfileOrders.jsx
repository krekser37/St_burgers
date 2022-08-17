import React from "react";
import Styles from "./profileOrders.module.css";
import { Link, useLocation } from "react-router-dom";
import OrdersCard from "../../../components/OrdersCard/OrdersCard";

export default function ProfileOrders() {
  const location = useLocation();
  return (
    <div className={`${Styles.container}`}>
      <Link
        to={{
          pathname: `/profile/orders/:id`,
          /*       pathname: path + `${order._id}`, */
          state: { background: location },
        }}
        /*     onClick={() => handleOpenOrderId(feed._id)} */
        className={`${Styles.FeedLink}`}
      >
        <div className={`${Styles.ElementsOrders}`}>
          <OrdersCard />
        </div>
      </Link>
    </div>
  );
}
