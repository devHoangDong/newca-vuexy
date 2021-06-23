import {
  IS_LOADING
} from '../actionType'

const initialState = {
  isLoading: false
}

const setLoading = (state = initialState, action) => {
  switch(action.type) {
    case IS_LOADING: {
      // console.log(action.payload);
      if(action.payload === true) {
        state.isLoading = true
      } else {
        state.isLoading = false
      }
    }
    default:
      return state
  }
}

export default setLoading
