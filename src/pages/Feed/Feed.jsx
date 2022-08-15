import React from "react";
import Styles from "./feed.module.css";
import FeedBoard from "../../components/FeedBoard/FeedBoard";
import FeedOrders from "../../components/FeedOrders/FeedOrders";

export default function Feed() {
  return (
    <>
      <section className={`${Styles.feed}`}>
        <h2 className="text text_type_main-large mb-5">Лента заказов</h2>
        <div className={`${Styles.container}`}>
          <div className={`${Styles.ElementsOrders}`}>
            <FeedOrders />
          </div>
          <FeedBoard />
        </div>
      </section>
    </>
  );
}
