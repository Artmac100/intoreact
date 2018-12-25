import {
  GET_USER_PENDING,
  GET_USER_FULFILLED,
  GET_USER_REJECTED
} from "../constants/ActionTypes";

export const initialState = {
  users: [],
  loading: false,
  error: null
};

export default function userReducer(state, { type, payload }) {
  switch (type) {
    case GET_USER_PENDING:
      return { ...state, loading: true, error: null };
    case GET_USER_FULFILLED:
    return { ...state, users: payload.users, loading: false };
    case GET_USER_REJECTED:
    return { ...state, error: payload.error, loading: false };
    default:
      return state;
  }
}
