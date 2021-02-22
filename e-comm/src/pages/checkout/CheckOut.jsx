import React from "react";
import "./CheckOut.scss";
import { useSelector } from "react-redux";
import CheckOutItem from "../../component/checkout-item/CheckOutItem";

const CheckOut = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const totalPrice =
    cartItems.length > 0
      ? cartItems.reduce((total, item) => {
          return total + item.quantity * item.price;
        }, 0)
      : 0;

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>
            <span className="quantity">Quantity</span>
          </span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckOutItem key={item.id} {...item}></CheckOutItem>;
      })}
      <div className="total">
        <span>TOTAL:{totalPrice}$</span>
      </div>
    </div>
  );
};

export default CheckOut;
