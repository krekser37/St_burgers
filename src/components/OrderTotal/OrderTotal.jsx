import React, {  useState, useContext } from "react";
import Styles from "./OrderTotal.module.css";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { IngredientsContext } from "../../services/AppContext";



const OrderTotal = ({totalPrice}) => {
  const { ingredients } = useContext(IngredientsContext);
  const [isOpenOrderDetailsModal, setOpenOrderDetailsModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const ingredientsId = ingredients.map((item) => {
    return item._id
  });

  function handleOpenOrderDetailsModal() {
    fetch('https://norma.nomoreparties.space/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        "ingredients": ingredientsId
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status)
      }
    })
    .then(res => {
      setOrderNumber(res.order.number); 
      setOpenOrderDetailsModal(true)
    })
    .catch((err) => console.log(err));
  }


  const handleCloseOrderDetailsModal = () => {
    setOpenOrderDetailsModal(false);
  };

  const ordertTitle = " ";

  return (
    <section className={`${Styles.totalElements} mt-10 mr-4`}>
      <p className="text text_type_digits-medium">{totalPrice.price}</p>
      <div className={`${Styles.totalCurrencyIcon}  ml-2 mt-3 mr-10`}>
        <CurrencyIcon />
      </div>
      <Button type="primary" size="large" onClick={handleOpenOrderDetailsModal}>
        Оформить заказ
      </Button>
      {isOpenOrderDetailsModal && (
        <Modal onClose={handleCloseOrderDetailsModal} title={ordertTitle}>
          <OrderDetails orderNumber={orderNumber} />
        </Modal>
      )}
    </section>
  );
};

OrderTotal.propTypes = {
  orderNumber: PropTypes.number,
};

export default OrderTotal;
