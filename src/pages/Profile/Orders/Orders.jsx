import React from "react";
import Styles from "./orders.module.css";

export default function Orders() {
  return (
    <div className={Styles.Orders}>
      <h2 className="text text_type_main-medium">
        На данный момент вы не сделали ни одного заказа
      </h2>
    </div>
  );
}
