import React, {useEffect} from "react";
import Styles from "./feed.module.css";
import FeedBoard from "../../components/FeedBoard/FeedBoard";
import FeedOrders from "../../components/FeedOrders/FeedOrders";
import { useDispatch } from 'react-redux';
import { wsConnectionStart, wsConnectionClosed } from "../../services/actions/wsActions";

export default function Feed() {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(wsConnectionStart())
      return () => {
          dispatch(wsConnectionClosed())
      }
  }, [dispatch])

  return (
    <>
      <section className={`${Styles.feed}`}>
        <h2 className="text text_type_main-large mb-5">Лента заказов</h2>
        <div className={`${Styles.container}`}>
          <FeedOrders />
          <FeedBoard />
        </div>
      </section>
    </>
  );
}
