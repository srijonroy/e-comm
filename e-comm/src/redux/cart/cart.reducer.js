import { CartTypes } from "./cart.types";

const initialState = {
    hidden:true
}

const cartReducer = (state = initialState, { type }) => {
    switch (type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
        return { ...state, hidden: !state.hidden };

    default:
        return state
    }
}

export default cartReducer;
