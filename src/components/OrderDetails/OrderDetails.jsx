import React from "react";
import Styles from "./OrderDetails.module.css";
import Done from "./img/Done";
/* import PropTypes from "prop-types"; */

const OrderDetails = ({ orderNumber }) => {
  return (
    <div className={Styles.OrderDetails}>
      <h3
        className="text text_type_digits-large mt-30" /* onClick={onClick} */
      >
        {orderNumber}
      </h3>
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
  );
};

/* OrderDetails.propTypes = {
  orderNumber: PropTypes.number.isRequired,
}; */

export default OrderDetails;
