import { CartTypes } from "./cart.types";

export const toggleDropDown = () => {
    return {
      type: CartTypes.TOGGLE_CART_HIDDEN,
    };
  };