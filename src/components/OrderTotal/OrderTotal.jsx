import React, { useCallback } from "react";
import Styles from "./OrderTotal.module.css";
import Modal from "../Modal/Modal";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderNumber from "../OrderNumber/OrderNumber";
import Preloader from "../Preloader/Preloader";
import Done from "./img/done.svg";
import PropTypes from "prop-types";
import ingredientsDataPropTypes from "../utils/propTypes";
import { useDispatch, useSelector } from "react-redux";
import { getOrder, resetOrderModal } from "../../services/actions/index";

function OrderTotal({ orderIngredients, totalPrice }) {
  const dispatch = useDispatch();
  const order = useSelector((store) => store.order);

  /*  console.log(order.order);
  console.log(orderNumber);
  console.log(orderIngredients); */
 
  const handleOpenOrderModal = () => {
    if(orderIngredients !== undefined) {
      dispatch(getOrder(orderIngredients));
    }
  };

  const handleCloseOrderModal = useCallback(() => {
    dispatch(resetOrderModal(false));
  }, [dispatch]);

  const ordertTitle = " ";

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
          {order.orderRequest ? (
            <p className="text secondary text_type_main-default mb-30">
              Что-то пошло не так... Попробуйте оформить заказ еще раз.
            </p>
          ) : (
            <div className={Styles.OrderDetails}>
              {!order.orderSucces ? (
                <Preloader />
              ) : (
                <OrderNumber orderNumber={order.order} />
              )}
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

OrderTotal.propTypes = {
  totalPrice: PropTypes.number,
  orderIngredients: PropTypes.arrayOf(ingredientsDataPropTypes),
};

export default OrderTotal;
