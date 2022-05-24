import React from "react";
import Styles from "./OrderNumber.module.css";

const OrderNumber = ({ orderNumber }) => {
  return (
    <>
      <h3 className="text text_type_digits-large mt-4">
        {orderNumber}
      </h3>
    </>
  );
};

export default OrderNumber;
