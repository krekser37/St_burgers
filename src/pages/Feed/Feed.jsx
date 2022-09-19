import React, { useEffect } from "react";
import Styles from "./feed.module.css";
import FeedBoard from "../../components/FeedBoard/FeedBoard";
import FeedOrders from "../../components/FeedOrders/FeedOrders";
import { useDispatch } from "react-redux";
import {
  wsConnectionStart,
  wsConnectionClosed,
} from "../../services/actions/wsActions";
import { useSelector } from "react-redux";
import Preloader from "../../components/Preloader/Preloader";
import {wsUrl} from "../../utils/burger-api";

export default function Feed() {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.wsOrders.orders);

  useEffect(() => {
  /*   dispatch(wsConnectionClosed()); */
    dispatch(
      wsConnectionStart(wsUrl));
    return () => {
      dispatch(
        wsConnectionClosed());
    };
  }, [dispatch]);

  return (
    <>
      <section className={`${Styles.feed}`}>
        <h2 className="text text_type_main-large mb-5">Лента заказов</h2>
        {orders.length !== 0 ? (
          <div className={`${Styles.container}`}>
            <FeedOrders />
            <FeedBoard />
          </div>
        ) : (
          <div className={`${Styles.containerPreloader}`}>
            <Preloader />
          </div>
        )}
      </section>
    </>
  );
}
