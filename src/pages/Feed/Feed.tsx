import React, { useEffect } from "react";
import Styles from "./feed.module.css";
import FeedBoard from "../../components/FeedBoard/FeedBoard";
import FeedOrders from "../../components/FeedOrders/FeedOrders";
import {
  wsConnectionStart,
  wsConnectionClosed,
} from "../../services/actions/wsActions";
import Preloader from "../../components/Preloader/Preloader";
import {wsUrl} from "../../utils/burger-api";
import { useAppDispatch, useAppSelector } from "../../services/hooks";

const Feed = () =>{
  const dispatch = useAppDispatch();
  const orders = useAppSelector((store) => store.wsOrders.orders);

  useEffect(() => {
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
        {orders/* .length !== 0 */ ? (
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


export default Feed;