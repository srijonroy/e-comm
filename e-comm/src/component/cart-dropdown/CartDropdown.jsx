import "./CartDropdown.scss";
import Button from "../Button/Button";
import CartItem from "../cart-item/CartItem";

import React from "react";
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
