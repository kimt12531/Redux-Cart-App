import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../UI/Modal";
import { orderActions } from "../../store/order-slice";
import { submitOrderData } from "../../store/order-actions";
import { cartActions } from "../../store/cart-slice";
import classes from "./Order.module.css";
import { uiActions } from "../../store/ui-slice";
import OrderItem from "./OrderItem";

const Order = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);

  const isEmpty = cart.items.length <= 0;

  useEffect(() => {
    const totalPrice = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    dispatch(
      orderActions.replaceOrder({
        items: [...cart.items] || [],
        totalPrice,
      })
    );
  }, [dispatch, cart]);

  const closeOrderHandler = () => {
    dispatch(uiActions.setOrderModalShow({ show: false }));
  };

  const submitOrderHandler = () => {
    const orderData = {
      items: order.items,
      totalPrice: order.totalPrice,
    };
    dispatch(submitOrderData(orderData));
    dispatch(cartActions.resetCart());

    const totalPrice = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    dispatch(
      orderActions.replaceOrder({
        items: [...cart.items] || [],
        totalPrice,
      })
    );
  };

  return (
    <Modal onClose={closeOrderHandler}>
      <ul className={classes.items}>
        {cart.items.map((item) => (
          <OrderItem
            key={item.id}
            item={{
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
            }}
          />
        ))}
      </ul>
      <div className={classes.order}>
        <header>
          <h2>Total Price:</h2>
          <h3>${order.totalPrice.toFixed(2)}</h3>
        </header>
        {!isEmpty && <button onClick={submitOrderHandler}>Submit Order</button>}
      </div>
    </Modal>
  );
};

export default Order;
