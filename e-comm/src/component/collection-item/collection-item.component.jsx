import React from "react";
import "./collection-item.styles.scss";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = (item) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="image"
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <Button onClick={() => dispatch(addItem(item))}>ADD TO CART</Button>
    </div>
  );
};

export default CollectionItem;
