import { LOGOUT,LOGIN } from '../../actionType';

const initialState = {}
const isLogin = (state=initialState, action) => {
switch (action.type) {
    case LOGIN : {
        return { ...state,isLogin:true, values: action.payload }
    }
    default: return state; 
}
}
export default isLogin;