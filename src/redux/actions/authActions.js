import { SET_CURRENT_USER, CLEAR_CURRENT_USER } from "../types/authTypes";

export const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload: payload,
});
export const clearCurrentUser = () => ({
  type: CLEAR_CURRENT_USER,
});
