import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg";
import { toggleDropDown } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CartIcon = ({ toggleCart }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: () => dispatch(toggleDropDown()),
  };
};

export default connect(null, mapDispatchToProps)(CartIcon);
