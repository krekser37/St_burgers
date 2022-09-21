import React, { FC } from "react";
/* import PropTypes from "prop-types"; */

interface IOrderNumber {
  orderNumber?: number |undefined;
}

const OrderNumber: FC <IOrderNumber> = ({ orderNumber }) => {
  return (
    <>
      <h3 className="text text_type_digits-large mt-4">
        {orderNumber}
      </h3>
    </>
  );
};

/* OrderNumber.propTypes = {
  orderNumber: PropTypes.number.isRequired,
}; */

export default OrderNumber;
