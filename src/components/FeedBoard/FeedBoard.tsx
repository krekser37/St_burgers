import React from "react";
import Styles from "./feedBoard.module.css";
import { useAppSelector } from "../../services/hooks";

const FeedBoard = () =>{
  const total = useAppSelector((store) => store.wsOrders.total);
  const totalToday = useAppSelector((store) => store.wsOrders.totalToday);
  const orders = useAppSelector((store) => store.wsOrders.orders);

  return (
    <>
      <section className={`${Styles.FeedBoard}`}>
        <div className={`${Styles.statys} mb-15`}>
          <div className={`${Styles.list}`}>
            <h2 className="text text_type_main-medium pb-6">Готовы:</h2>
            <ul className={`${Styles.numbers}`}>
              {orders?.map((order, index) => {
                if (order.status === "done" && index < 30) {
                  return (
                    <li
                      className={`${Styles.numberDone} text text_type_digits-default mb-2 mr-3`}
                      key={index}
                    >
                      {order.number}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
          <div className={`${Styles.list}`}>
            <h2 className="text text_type_main-medium pb-6">В работе:</h2>
            <ul className={`${Styles.numbers}`}>
              {orders?.map((order, index) => {
                if (order.status !== "done" && index < 30) {
                  return (
                    <li
                      className={`${Styles.numberWork} text text_type_digits-default mb-2 mr-3`}
                      key={index}
                    >
                      {order.number}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </div>
        <div className={`${Styles.digits} mb-15`}>
          <h2 className="text text_type_main-medium">
            Выполнено за все время:
          </h2>
          <span className={`${Styles.done} text text_type_digits-large`}>
            {total}
          </span>
        </div>
        <div className="">
          <h2 className="text text_type_main-medium">Выполнено за сегодня:</h2>
          <span className={`${Styles.done} text text_type_digits-large`}>
            {totalToday}
          </span>
        </div>
      </section>
    </>
  );
}
export default FeedBoard;