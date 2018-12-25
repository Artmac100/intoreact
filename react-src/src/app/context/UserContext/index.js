import React, { useReducer, createContext } from "react";
import PropTypes from "prop-types";

import userReducer, { initialState } from "../../reducers/usersReducer";

/* Using context for get reducer state and dispatching
 * get on different grandchild components
*/

const UserContext = createContext({
  userState: initialState,
  dispatch: () => {}
});

export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

UserContext.propTypes = {
  children: PropTypes.element
}

export default UserContext;
