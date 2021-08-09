import { DEPOSIT } from "../../actionType";

const initialState = {
  isDeposit: false,
};

const deposit = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT: {
      return !state;
    }
    default:
      return state;
  }
};

export default deposit;
