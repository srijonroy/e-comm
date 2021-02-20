import { combineReducers } from 'redux';
import CartDropdown from '../component/cart-dropdown/CartDropdown';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
    user:userReducer,
    cart:cartReducer
});