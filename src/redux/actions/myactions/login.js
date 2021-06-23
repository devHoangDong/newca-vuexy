import { LOGIN } from "../../actionType"

export const login = (payload) => {
    return{
        type: LOGIN,
        payload,
    }
}