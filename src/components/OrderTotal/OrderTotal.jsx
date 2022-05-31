import React, { useState, useContext } from "react";
import Styles from "./OrderTotal.module.css";
import Modal from "../Modal/Modal";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientsContext } from "../../services/AppContext";
import OrderNumber from "../OrderNumber/OrderNumber";
import Preloader from "../Preloader/Preloader";
import Done from "./img/done.svg";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {getOrder} from "../../services/actions/index";

function OrderTotal({ totalPrice }) {
  const dispatch = useDispatch();
  const orderIngredients = useSelector((state) => state.order.orderIngredients);
  /* const totalPrice = useSelector(state => state.order.totalPrice); */
  const [isOpenOrderDetailsModal, setOpenOrderDetailsModal] = useState(false);
  const [ingredientsLoading, setIngredientsLoading] = useState(true);
  const [orderNumber, setOrderNumber] = useState(null);
  //const selectIngredients = useContext(IngredientsContext);
  //const selectingredientsId = selectIngredients.map((item) => item._id);
  /*   console.log(selectIngredients); 
  console.log(selectingredientsId);  */

  const handleOpenOrderDetailsModal = () => {
    setIngredientsLoading(true);
    setOpenOrderDetailsModal(true);
    (orderIngredients && dispatch(getOrder(orderIngredients)));
  };

  const handleCloseOrderDetailsModal = () => {
    setOpenOrderDetailsModal(false);
  };

/*   const ingredientsId = selectIngredients.map((item) => {
    return item._id;
  }); */

/*   function getOrder() {
    fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        ingredients: ingredientsId,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(res.status);
        }
      })
      .then((res) => {
        setOrderNumber(res.order.number);
        setIngredientsLoading(false);
      })
      .catch((err) => console.log(err));
  } */

  const ordertTitle = " ";

/*   const totalPrice = useSelector(store =>
    store.selectedIngredients.items.reduce((acc, item) => acc + item.price * item.qty, 0)
  ); */

  return (
    <section className={`${Styles.totalElements} mt-10 mr-4`}>
      <p className="text text_type_digits-medium">{totalPrice}</p>
      <div className={`${Styles.totalCurrencyIcon}  ml-2 mt-3 mr-10`}>
        <CurrencyIcon />
      </div>
      <Button type="primary" size="large" onClick={handleOpenOrderDetailsModal}>
        Оформить заказ
      </Button>
      {isOpenOrderDetailsModal && (
        <Modal onClose={handleCloseOrderDetailsModal} title={ordertTitle}>
          <div className={Styles.OrderDetails}>
            {ingredientsLoading ? (
              <Preloader />
            ) : (
              <OrderNumber orderNumber={orderNumber} />
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
        </Modal>
      )}
    </section>
  );
}

OrderTotal.propTypes = {
  orderNumber: PropTypes.number,
};

export default OrderTotal;
