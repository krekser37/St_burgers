import React, { useMemo } from "react";
import Styles from "./ordersCard.module.css";
import { useSelector } from "react-redux";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";


export default function OrdersCard({order, status}) {
  const allIngredients = useSelector(store => store.ingredients.ingredients);
/*   console.log(order); */
/*   const ingredients = {order.ingredients}; */

/* console.log(allIngredients); */

const orderIngredients = useMemo(()=> {
  return order?.ingredients.map((id)=> {
    console.log(id);
    return allIngredients?.find((item)=> {
      console.log(item.id);
      
      return id === item.id
    })
  })
}, [order?.ingredients, allIngredients])

console.log(orderIngredients);
  return (
    <>
      <section className={`${Styles.feedOrders} p-6 mr-2 mb-4`}>
        <div className={`${Styles.order} mb-6`}>
          <p className="text text_type_digits-default">#{order.number}</p>
          <p className="text text_type_main-default text_color_inactive">
            Сегодня, 16:20 i-GMT+3
          </p>
        </div>
        <h2 className="text text_type_main-medium mb-6">
          {order.name}
        </h2>
        <div className={`${Styles.IngredientsPrice} `}>
          <ul className={`${Styles.Ingredients} `}>
            {orderIngredients?.map((ingredient) => {
               <li className={`${Styles.Ingredient} `} style={{ zIndex: 9 }}>
               <img className={Styles.image} src={ingredient?.image}
                        alt={ingredient?.name}/>
             </li>
            }

            )}
{/*             <li className={`${Styles.Ingredient} `} style={{ zIndex: 9 }}>
              <img className={Styles.image} />
            </li>
            <li className={`${Styles.Ingredient} `} style={{ zIndex: 9 }}>
              <img className={Styles.image} />
            </li>
            <li className={`${Styles.Ingredient} `} style={{ zIndex: 9 }}>
              <img className={Styles.image} />
            </li>
            <li className={`${Styles.Ingredient} `} style={{ zIndex: 9 }}>
              <img className={Styles.image} />
            </li>
            <li className={`${Styles.Ingredient_last} `} style={{ zIndex: 9 }}>
              <img className={Styles.image} />
            </li> */}
          </ul>
          <div className={`${Styles.Price} ml-6`}>
            <p className="text text_type_digits-default">480</p>
            <CurrencyIcon />
          </div>
        </div>
      </section>
    </>
  );
}
