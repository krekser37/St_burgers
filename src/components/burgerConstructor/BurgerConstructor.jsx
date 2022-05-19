import React, { useMemo, useContext } from "react";
import Styles from "./BurgerConstructor.module.css";
import { ConstructorElement, DragIcon,} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ingredientsDataPropTypes from "../utils/propTypes";
import OrderTotal from "../OrderTotal/OrderTotal";
import { IngredientsContext, TotalPriceContext } from "../../services/AppContext";

const BurgerConstructor = () => {
  const { ingredients } = useContext(IngredientsContext);
  const { totalPrice} = useContext(TotalPriceContext);

  const buns = useMemo(
    () => ingredients.filter((item) => item.type === "bun"),
    [ingredients]
  );

  const filling = useMemo(
    () => ingredients.filter((item) => item.type !== "bun"),
    [ingredients]
  );



  return (
    <section className={`${Styles.BurgerConstructor} ml-14`}>
      <section className={`${Styles.elements} mt-25`}>
        <div className={` mr-4`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={buns[0].name + `(верх)`}
            price={buns[0].price}
            thumbnail={buns[0].image}
          />
        </div>
        <ul className={`${Styles.ElementsIngredients}`}>
          {filling.map((ingredient) => {
            return (
              <li className={`${Styles.ElementsItem}`} key={ingredient._id}>
                <DragIcon className={`mr-2`} />
                <div>
                  <ConstructorElement
                    className={`${Styles.ElementsConstructor}`}
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image}
                  />
                </div>
              </li>
            );
          })}
        </ul>
        <div className={` mr-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={buns[0].name + ` (низ)`}
            price={buns[0].price}
            thumbnail={buns[0].image}
          />
        </div>
      </section>
      <OrderTotal /* totalIngredients={orderTotal.ingredients} */ totalPrice={totalPrice} />
    </section>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsDataPropTypes.isRequired)
    .isRequired,
};

export default BurgerConstructor;
