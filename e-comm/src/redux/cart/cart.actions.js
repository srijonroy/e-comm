import { CartTypes } from "./cart.types";

export const toggleDropDown = () => {
    return {
      type: CartTypes.TOGGLE_CART_HIDDEN,
    };
  };

  export const addItem = item => {
    return {
      type: CartTypes.ADD_ITEMS,
      payload:item
    }
  }

  
  export const ClearItemFromCart = item => {
    return {
      type: CartTypes.REMOVE_ITEMS,
      payload:item
    }
  }

  export const removeItem = item => {
    return {
      type: CartTypes.REMOVE_ITEM,
      payload:item
    }
  }