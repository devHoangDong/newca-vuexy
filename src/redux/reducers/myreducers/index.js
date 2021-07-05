import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loading from './loading';
import Cart from './cart';

const RootReducer = combineReducers ({
  userReducer,
  loading,
  Cart,
})

export default RootReducer
