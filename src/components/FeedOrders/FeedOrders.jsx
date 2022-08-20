import React from "react";
import Styles from "./feedOrders.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import OrdersCard from "../OrdersCard/OrdersCard";


export default function FeedOrders() {
  const location = useLocation();
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.wsOrders.orders);
/*   const wsOrders = useSelector((store) => store.wsOrders); */
  /*   let path = isProfile ? '/profile/orders/' : '/feed/'; */
/*     const handleOpenOrderId = ({order}) => {
    dispatch(openOrderId(order));
}; */
/* console.log(orders); */
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
