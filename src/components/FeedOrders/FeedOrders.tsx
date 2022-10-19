import React from "react";
import Styles from "./feedOrders.module.css";
/* import { useSelector } from "react-redux"; */
import { Link, useLocation } from "react-router-dom";
import OrdersCard from "../OrdersCard/OrdersCard";
import { useAppSelector } from "../../services/hooks";

const FeedOrders =() =>{
  const location = useLocation();
  const orders = useAppSelector((store) => store.wsOrders.orders);

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

export default FeedOrders;