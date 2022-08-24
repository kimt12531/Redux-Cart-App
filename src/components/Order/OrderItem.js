import React from "react";
import classes from "./OrderItem.module.css";

const OrderItem = (props) => {
  const { title, quantity, total } = props.item;

  return (
    <li className={classes.item}>
      <header>
        <h2>
          {quantity} x {title}
        </h2>
        <h3>${total.toFixed(2)}</h3>
      </header>
    </li>
  );
};

export default OrderItem;
