import React from "react";
import { useDispatch } from "react-redux";
import "./CheckOutItem.scss";
import {
  
  removeItem,
  addItem,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";

const CheckOutItem = (item) => {
  const { name, imageUrl, price, quantity } = item;
  const dispatch = useDispatch();

  const clearItemsFromCart = (item) => {
    dispatch(clearItemFromCart(item));
  };

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(item))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemsFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
