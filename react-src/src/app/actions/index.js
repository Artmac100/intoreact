import {
  GET_USER_PENDING,
  GET_USER_FULFILLED,
  GET_USER_REJECTED
} from "../constants/ActionTypes";

// fetching data and update reducer's state
export const getUsers = (url: string, dispatch: any) => {
  dispatch({ type: GET_USER_PENDING });
  return fetch(url.replace(/\{.+\}/g, ""))
    .then(res => {
      // check status and throw Error if status is not proper
      const isSuccess =
        (res.status >= 200 && res.status < 300) || res.status === 304;
      if (!isSuccess) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(users =>
      dispatch({
        type: GET_USER_FULFILLED,
        payload: {
          users: Array.isArray(users) ? users : [users]
        }
      })
    )
    .catch(error => {
      if (error.message) {
        return dispatch({
          type: GET_USER_REJECTED,
          payload: { error: "Got error: " + error.message }
        });
      }
      return dispatch({
        type: GET_USER_REJECTED,
        payload: { error: "Something went wrong" }
      });
    });
};
