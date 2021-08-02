import { DEPOSIT } from "../../actionType";

export const deposit = (payload) => {
  return {
    type: DEPOSIT,
    payload,
  };
};
