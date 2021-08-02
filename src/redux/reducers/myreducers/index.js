import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loading from "./loading";
import Cart from "./cart";
import deposit from "./deposit";

const RootReducer = combineReducers({
  userReducer,
  loading,
  Cart,
  deposit,
});

export default RootReducer;
