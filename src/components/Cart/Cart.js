import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { cartActions } from "../../store/cart-slice";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isEmpty = cartItems.length <= 0;

  const checkoutCartHandler = () => {
    dispatch(cartActions.resetCart());
  };

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {isEmpty && <p>Your cart is currently empty.</p>}
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
      {!isEmpty && <button onClick={checkoutCartHandler}>Checkout</button>}
    </Card>
  );
};

export default Cart;
