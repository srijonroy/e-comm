import "./CartDropdown.scss";
import Button from "../Button/Button";
import CartItem from "../cart-item/CartItem";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toggleDropDown } from "../../redux/cart/cart.actions";

const CartDropdown = () => {
  const history = useHistory();
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const redirectToCheckout = () => {
    history.push("/checkout");
    dispatch(toggleDropDown());
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
      </div>
      <Button onClick={redirectToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
