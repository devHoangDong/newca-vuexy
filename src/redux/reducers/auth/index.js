import { combineReducers } from "redux"
import { login } from "./loginReducer"
import { register } from "./registerReducers"
import isLogin from "./login"

const authReducers = combineReducers({
  login,
  isLogin,
  register
})

export default authReducers
