import { DEPOSIT } from "../../actionType";

const initialState = {
  amount: 0,
};

const deposit = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default deposit;
