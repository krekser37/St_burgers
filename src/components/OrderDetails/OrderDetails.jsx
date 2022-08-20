import React, { useMemo, useEffect } from "react";
import Styles from "./orderDetails.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderIngredient from "./OrderIngredient/OrderIngredient";
import { useParams, useLocation, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formatDate } from "../../utils/formatDate";
import Preloader from "../Preloader/Preloader";
import {
  wsConnectionClosedOwner,
  wsConnectionStartOwner,
} from "../../services/actions/wsActionsOwner";
import {
  wsConnectionClosed,
  wsConnectionStart,
} from "../../services/actions/wsActions";

export default function OrderDetails() {
  const dispatch = useDispatch();
  let { id } = useParams();
  let match = useRouteMatch();
  const isProfile = "/profile/orders/:id";
  const isFeed = "/feed/:id";

  const ordersAll = useSelector((state) => state.wsOrders.orders);
  const ordersOwner = useSelector((state) => state.wsOrdersOwner.orders);
  let orders = match.path === isProfile ? ordersOwner : ordersAll;
  let order = orders.find((order) => order._id === id);
  const allIngredients = useSelector((store) => store.ingredients.ingredients);
  const location = useLocation();
  const background = location?.state?.background;

  const orderIngredients = useMemo(() => {
    return order?.ingredients.map(
      (id) => {
        return allIngredients?.find((item) => {
          return id === item._id;
        });
      },
      [order?.ingredients, allIngredients]
    );
  }, [order, allIngredients]);

  const totalOrder = useMemo(() => {
    return orderIngredients?.reduce((sum, item) => {
      if (item?.type === "bun") {
        return (sum += item.price * 2);
      }
      return (sum += item ? item.price : 0);
    }, 0);
  }, [orderIngredients]);

  useEffect(() => {
    if (!order) {
      if (match.path === isProfile) {
        dispatch(wsConnectionStartOwner());
      }
      if (match.path === isFeed) {
        dispatch(wsConnectionStart());
      }
    }
    return () => {
      if (match.path === isProfile) {
        dispatch(wsConnectionClosedOwner());
      }
      if (match.path === isFeed) {
        dispatch(wsConnectionClosed());
      }
    };
  }, [dispatch, order, match.path, match.url]);

  return order ? (
    <div className={`${Styles.OrderDetails}`}>
      {background ? (
      <p className={`${Styles.number} text text_type_digits-default`}>
        # {order.number}
      </p>
      ) : (
      <p className={`${Styles.numberBackground} text text_type_digits-default`}>
        # {order.number}
      </p>)}
      <h2 className="text text_type_main-medium mb-2">{order.name}</h2>
      <span className={`${Styles.status} text text_type_main-default`}>
        {order.status === "done"
          ? "Выполнен"
          : order.status === "pending"
          ? "Готовится"
          : order.status === "created"
          ? "Создан"
          : "Выполнен"}
      </span>
      <h2 className="text text_type_main-medium mt-15 mb-6">Состав:</h2>
      <div className={`${Styles.ElementsIngredients}`}>
        {/* для нахождения одного элемента можно использовать spread оператор [...new Set(orderIngredients)] или Array.from(new Set(orderIngredients)) */}
        {[...new Set(orderIngredients)]?.map((ingredient, index) => {
          return (
            <OrderIngredient
              ingredient={ingredient}
              key={index}
              count={
                orderIngredients?.filter(
                  (item) => item?._id === ingredient?._id
                ).length
              }
            />
          );
        })}
      </div>
      <div className={`${Styles.dataPrice} mb-6 mt-10`}>
        <p className="text text_type_main-default text_color_inactive">
          {formatDate(order.createdAt)}
        </p>
        <div className={`${Styles.price} ml-6`}>
          <p className="text text_type_digits-default mr-2">{totalOrder}</p>
          <CurrencyIcon />
        </div>
      </div>
    </div>
  ) : (
    <div className={`${Styles.preloader} mt-20`}>
      <Preloader />
    </div>
  );
}
