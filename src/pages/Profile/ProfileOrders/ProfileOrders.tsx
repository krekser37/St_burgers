import React, { useEffect } from "react";
import Styles from "./profileOrders.module.css";
import { Link, useLocation } from "react-router-dom";
import OrdersCard from "../../../components/OrdersCard/OrdersCard";
import { getCookie } from "../../../utils/cookie";
import { wsConnectionClosed, wsConnectionStart } from "../../../services/actions/wsActions";
import { wsUrlOwner } from "../../../utils/burger-api";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";

const ProfileOrders =() =>{
  const location = useLocation();
  const dispatch = useAppDispatch();
  const orders = useAppSelector((store) => store.wsOrders.orders);
console.log(orders);
  useEffect(() => {
    const accessToken = getCookie("token");
    dispatch(wsConnectionStart(`${wsUrlOwner}?token=${accessToken}`));
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, [dispatch]);

  return (
    <div className={`${Styles.container}`}>
      <div className={`${Styles.ElementsOrders}`}>
        {orders/* .length > 0 */ ? (
          orders.reverse().map((order, index) => {
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


export default ProfileOrders;