
import {
  ADD_CART
} from '../actionType'

export const addCart = (payload) => {
  return {
    type: ADD_CART,
    payload
  }
}
