import React, { FC, useCallback } from "react";
import Styles from "./OrderTotal.module.css";
import Modal from "../Modal/Modal";
import { useHistory } from "react-router-dom";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderNumber from "../OrderNumber/OrderNumber";
import Preloader from "../Preloader/Preloader";
import Done from "./img/done.svg";
import { getOrder, resetOrderModal, deleteFromOrder } from "../../services/actions/order";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { TIngredient } from "../../services/types/types";

/* type TOrderTotal = {
  orderIngredients: Array<TIngredient>,
  totalPrice: number,
} */

const OrderTotal/* : FC <TOrderTotal>  */= ({ orderIngredients, totalPrice }) =>{
  const dispatch = useAppDispatch();
  const history = useHistory();
  const order = useAppSelector((store) => store.order);
  const user = useAppSelector((store) => store.auth.user);
console.log(orderIngredients);
  const handleOpenOrderModal = () => {
    !user && history.push("/login");
    user &&
      orderIngredients !== undefined &&
      dispatch(getOrder(orderIngredients));
  };

  const handleCloseOrderModal = useCallback(() => {
    dispatch(resetOrderModal());
    dispatch(deleteFromOrder());
  }, [dispatch]);

  const ordertTitle = " ";
/* console.log(order.order); */
  return (
    <section className={`${Styles.totalElements} mt-10 mr-4`}>
      <p className="text text_type_digits-medium">{totalPrice}</p>
      <div className={`${Styles.totalCurrencyIcon}  ml-2 mt-3 mr-10`}>
        <CurrencyIcon />
      </div>
      <Button type="primary" size="large" onClick={handleOpenOrderModal}>
        Оформить заказ
      </Button>
      {order.modalIsOpen && (
        <Modal onClose={handleCloseOrderModal} title={ordertTitle}>
          {order.orderFailed ? (
            <p className="text secondary text_type_main-default mb-30">
              Что-то пошло не так... Попробуйте оформить заказ еще раз.
            </p>
          ) : (
            <div className={Styles.OrderDetails}>


              {order?.orderSuccess ? (
                <OrderNumber orderNumber={order.order}/>
              ) : (
                <Preloader />
              ) }
              <p className="text text_type_main-medium mt-8 mb-15">
                идентификатор заказа
              </p>
              <img src={Done} alt="Готовится" />
              <p className="text text_type_main-default mt-15 mb-2">
                Ваш заказ начали готовить
              </p>
              <p className="text secondary text_type_main-default mb-30">
                Дождитесь готовности на орбитальной станции
              </p>
            </div>
          )}
        </Modal>
      )}
    </section>
  );
}

/* OrderTotal.propTypes = {
  totalPrice: PropTypes.number,
  orderIngredients: PropTypes.arrayOf(ingredientsDataPropTypes),
}; */

export default OrderTotal;
