import "./CartDropdown.scss";
import CartItem from "../cart-item/CartItem";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toggleDropDown } from "../../redux/cart/cart.actions";
import CustomButton from "../Button/Button";

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
      <CustomButton click={redirectToCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
