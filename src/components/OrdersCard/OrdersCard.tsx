import React, { FC, useMemo } from "react";
import Styles from "./ordersCard.module.css";
/* import { useSelector } from "react-redux"; */
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { formatDate } from "../../utils/formatDate";
import { useAppSelector } from "../../services/hooks";
import { TOrderDetails } from "../../services/types/types";

type TOrderCard = {
  order: TOrderDetails,
  status: boolean,
}

const OrdersCard: FC<TOrderCard> = ({ order, status }) => {
  const allIngredients = useAppSelector((store) => store.ingredients.ingredients);

  const orderIngredients = useMemo(() => {
    return order?.ingredients.map((id: string) => {
      return allIngredients?.find((item) => {
        return id === item._id;
      });
    });
  }, [order?.ingredients, allIngredients]);

  const totalOrder = useMemo(() => {
    return orderIngredients?.reduce((sum: number, item) => {
      if (item?.type === "bun") {
        return (sum += item.price * 2);
      }
      return (sum += item ? item.price : 0);
    }, 0);
  }, [orderIngredients]);

  return (
    <>
      <section className={`${Styles.feedOrders} p-6 mr-2 mb-4`}>
        <div className={`${Styles.order} mb-6`}>
          <p className="text text_type_digits-default">#{order.number}</p>
          <p className="text text_type_main-default text_color_inactive">
            {formatDate(order.createdAt)}
          </p>
        </div>
        <h2 className="text text_type_main-medium mb-2">{order.name}</h2>
				{!!status &&
					<p className={`${Styles.status} text text_type_main-default mb-6`}>
						{order.status === 'done' ? 'Выполнен' : order.status === 'pending' ? 'Готовится' : order.status === 'created' ? 'Создан' : 'Выполнен'}
					</p>}
        <div className={`${Styles.IngredientsPrice} `}>
          <ul className={`${Styles.Ingredients} `}>
            {/* для нахождения одного элемента можно использовать spread оператор [...new Set(orderIngredients)] или Array.from(new Set(orderIngredients)) */}
            {Array.from(new Set(orderIngredients))?.map((ingredient, index) => {
              if (index < 5) {
                return (
                  <li key={index} className={`${Styles.Ingredient} `}>
                    <img
                      className={Styles.image}
                      src={ingredient?.image}
                      alt={ingredient?.name}
                    />
                  </li>
                );
              }
              if (index === 6) {
                return (
                  <li key={index} className={`${Styles.Ingredient_last} `}>
                    <img
                      className={Styles.image}
                      src={ingredient?.image}
                      alt={ingredient?.name}
                    />
                    <div className={`${Styles.IngredientOverlay}`}></div>
                    <span
                      className={`${Styles.IngredientCount} text text_type_main-default`}
                    >
                      +{orderIngredients.length - 5}
                    </span>
                  </li>
                );
              } return null;
            })}
          </ul>
          <div className={`${Styles.Price} ml-6`}>
            <p className="text text_type_digits-default mr-2">{totalOrder}</p>
            <CurrencyIcon type="primary"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrdersCard;