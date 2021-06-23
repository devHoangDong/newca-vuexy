
import {
  IS_LOADING
} from '../../actionType'

export const setLoading = (payload) => {
  return {
    type: IS_LOADING,
    payload
  }
}
