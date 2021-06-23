import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loading from './loading';
import Cart from './cart';
import login from './login';

const RootReducer = combineReducers ({
  userReducer,
  loading,
  Cart,
  login,
})

export default RootReducer
