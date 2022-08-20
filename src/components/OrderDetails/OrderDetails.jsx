import React, { useMemo } from "react";
import Styles from "./orderDetails.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderIngredient from "./OrderIngredient/OrderIngredient";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils/formatDate";

export default function OrderDetails() {
  const { id } = useParams();
  const orders = useSelector((state) => state.wsOrders.orders);
  const allIngredients = useSelector((store) => store.ingredients.ingredients);
  const order = orders.find((order) => order._id === id);

  const orderIngredients = useMemo(() => {
    return order?.ingredients.map(
      (id) => {
        return allIngredients?.find((item) => {
          return id === item._id;
        });
      },
      [order?.ingredients, allIngredients]
    );
  });

  const totalOrder = useMemo(() => {
    return orderIngredients?.reduce((sum, item) => {
      if (item?.type === "bun") {
        return (sum += item.price * 2);
      }
      return (sum += item ? item.price : 0);
    }, 0);
  }, [orderIngredients]);

  console.log(order);

  return (
    <>
      <div className="container">
        <p className={`${Styles.number} text text_type_digits-default`}>
          # {order.number}
        </p>
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
            return <OrderIngredient ingredient={ingredient} key={index} count ={orderIngredients?.filter((item) => item?._id === ingredient?._id).length}/>;
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
    </>
  );
}
