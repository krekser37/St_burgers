import React from "react";
import Styles from "./feedBoard.module.css";

export default function FeedBoard() {
  return (
    <>
      <section className={`${Styles.FeedBoard}`}>
        <div className={`${Styles.statys} mb-15`}>
          <div className={`${Styles.list}`}>
            <h2 className="text text_type_main-medium pb-6">Готовы:</h2>
            <ul className={`${Styles.numbers}`}>
              <li
                className={`${Styles.numberDone} text text_type_digits-default mb-2`}
                /* key={order._id} */
              >
                034533{/* {order.number} */}
              </li>
              <li
                className={`${Styles.numberDone} text text_type_digits-default mb-2`}
                /* key={order._id} */
              >
                034532{/* {order.number} */}
              </li>
              <li
                className={`${Styles.numberDone} text text_type_digits-default mb-2`}
                /* key={order._id} */
              >
                034532{/* {order.number} */}
              </li>
              <li
                className={`${Styles.numberDone} text text_type_digits-default mb-2`}
                /* key={order._id} */
              >
                034532{/* {order.number} */}
              </li>
              <li
                className={`${Styles.numberDone} text text_type_digits-default mb-2`}
                /* key={order._id} */
              >
                034532{/* {order.number} */}
              </li>
              <li
                className={`${Styles.numberDone} text text_type_digits-default mb-2`}
                /* key={order._id} */
              >
                034532{/* {order.number} */}
              </li>
              <li
                className={`${Styles.numberDone} text text_type_digits-default mb-2`}
                /* key={order._id} */
              >
                034532{/* {order.number} */}
              </li>
              <li
                className={`${Styles.numberDone} text text_type_digits-default mb-2`}
                /* key={order._id} */
              >
                034532{/* {order.number} */}
              </li>
              <li
                className={`${Styles.numberDone} text text_type_digits-default mb-2`}
                /* key={order._id} */
              >
                034532{/* {order.number} */}
              </li>
              <li
                className={`${Styles.numberDone} text text_type_digits-default mb-2`}
                /* key={order._id} */
              >
                034532{/* {order.number} */}
              </li>
              <li
                className={`${Styles.numberDone} text text_type_digits-default mb-2`}
                /* key={order._id} */
              >
                034532{/* {order.number} */}
              </li>
              <li
                className={`${Styles.numberDone} text text_type_digits-default mb-2`}
                /* key={order._id} */
              >
                034532{/* {order.number} */}
              </li>
              <li
                className={`${Styles.numberDone} text text_type_digits-default mb-2`}
                /* key={order._id} */
              >
                034532{/* {order.number} */}
              </li>
            </ul>
          </div>
          <div className={`${Styles.list}`}>
            <h2 className="text text_type_main-medium pb-6">В работе:</h2>
            <ul className={`${Styles.numbers}`}>
              <li
                className={`${Styles.numberWork} text text_type_digits-default mb-2`}
                /*  key={order._id} */
              >
                034538{/* {order.number} */}
              </li>
              <li
                className={`${Styles.numberWork} text text_type_digits-default mb-2`}
                /*   key={order._id} */
              >
                034588{/* {order.number} */}
              </li>
            </ul>
          </div>
        </div>
        <div className={`${Styles.digits} mb-15`}>
          <h2 className="text text_type_main-medium">
            Выполнено за все время:
          </h2>
          <span className={`${Styles.done} text text_type_digits-large`}>
            28752{/* {total} */}
          </span>
        </div>
        <div className="">
          <h2 className="text text_type_main-medium">Выполнено за сегодня:</h2>
          <span className={`${Styles.done} text text_type_digits-large`}>
            138{/* {totalToday} */}
          </span>
        </div>
      </section>
    </>
  );
}
