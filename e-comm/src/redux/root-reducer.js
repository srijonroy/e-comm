import { combineReducers } from "redux";
import CartDropdown from "../component/cart-dropdown/CartDropdown";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import DirectoryReducer from "./directory/directory.reducer";
import shopReducer from "./shopData/shopData.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart","shop"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: DirectoryReducer,
  shop:shopReducer
});

export default persistReducer(persistConfig, rootReducer);
