// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import myreducers from './myreducers/index'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  myreducers
})

export default rootReducer
