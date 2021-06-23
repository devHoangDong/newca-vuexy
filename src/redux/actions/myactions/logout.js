import { LOGOUT } from "../actionType"

export const logout = (payload) => {
    return{
        type: LOGOUT,
        payload,
    }
}