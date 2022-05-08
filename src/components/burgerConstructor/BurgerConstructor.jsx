import React from "react";
import Styles from "./BurgerConstructor.module.css";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = ({ingredients}) => {
  return (
    <section className={`${Styles.BurgerConstructor} ml-14`}>
      <section className={`${Styles.elements} mt-25`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          /* thumbnail={img} */
        />
        <ul className={`${Styles.ElementsIngredients}`}>
          <li className="">
            <DragIcon />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              /* thumbnail={img} */
            />
          </li>
          <li className="">
            <DragIcon />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              /* thumbnail={img} */
            />
          </li>
          <li className="">
            <DragIcon />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              /* thumbnail={img} */
            />
          </li>
          <li className="">
            <DragIcon />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              /* thumbnail={img} */
            />
          </li>
          <li className="">
            <DragIcon />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              /* thumbnail={img} */
            />
          </li>
        </ul>

        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          /* thumbnail={img} */
        />
      </section>
      <section className={`${Styles.totalElements} mt-10 mr-4`}>
        <p className="text text_type_digits-medium">633</p>
        <div className={`${Styles.totalCurrencyIcon}  ml-2 mt-3 mr-10`}>
          <CurrencyIcon />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </section>
    </section>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsDataPropTypes.isRequired).isRequired,
};

export default BurgerConstructor;
