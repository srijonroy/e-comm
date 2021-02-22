import { CartTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case CartTypes.ADD_ITEMS:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };
    case CartTypes.REMOVE_ITEMS:
      return { ...state, cartItems: [...state.cartItems, payload] };
    default:
      return state;
  }
};

export default cartReducer;
