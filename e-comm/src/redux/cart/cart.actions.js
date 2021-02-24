import { CartTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartTypes.ADD_ITEMS,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartTypes.REMOVE_ITEMS,
  payload: item,
});

export const clearCart = () => ({
  type: CartTypes.CLEAR_CART,
});
