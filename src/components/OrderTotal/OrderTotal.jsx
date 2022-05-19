import React, {  useState, useContext } from "react";
import Styles from "./OrderTotal.module.css";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { TotalPriceContext } from '../../services/AppContext';

const OrderTotal = () => {

  const [isOpenOrderDetailsModal, setOpenOrderDetailsModal] = useState(false);
  const { totalPrice } = useContext(TotalPriceContext);
  const [orderNumber, setOrderNumber] = useState("");

  const handleOpenOrderDetailsModal = () => {
    setOpenOrderDetailsModal(true);
  };

  const handleCloseOrderDetailsModal = () => {
    setOpenOrderDetailsModal(false);
  };

  const ordertTitle = " ";

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
          <OrderDetails orderNumber={orderNumber} />
        </Modal>
      )}
    </section>
  );
};

OrderTotal.propTypes = {
  /* ingredients: PropTypes.object.isRequired, */
  orderNumber: PropTypes.number.isRequired,
};

export default OrderTotal;
