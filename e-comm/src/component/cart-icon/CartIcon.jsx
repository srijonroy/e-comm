import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg";
import { toggleDropDown } from "../../redux/cart/cart.actions";
import { connect, useSelector } from "react-redux";

const CartIcon = ({ toggleCart }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const itemCount = cartItems.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: () => dispatch(toggleDropDown()),
  };
};

export default connect(null, mapDispatchToProps)(CartIcon);
