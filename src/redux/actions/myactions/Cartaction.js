
import {
  ADD_CART,
  DECREASE_CART,
  DEL_CART
} from '../../actionType'

export const addCart = (payload) => {
  return {
    type: ADD_CART,
    payload
  }
}
export const decreaseCart = (payload) => {
  return {
    type: DECREASE_CART,
    payload
  }
}
export const dellCart = (payload) => {
  return {
    type: DEL_CART,
    payload
  }
}
