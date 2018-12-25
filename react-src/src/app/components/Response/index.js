import React, { useContext, memo } from "react";

import UserContext from "../../context/UserContext";
import ResponseItem from "../ResponseItem";

const Response = () => {
  // get state from context
  const { userState } = useContext(UserContext);
  const { error, users } = userState;

  if (error) return <div>{error}</div>;

  return users.length ? (
    <div>
      {users.map(user => (
        <ResponseItem key={user.id} user={user} />
      ))}
    </div>
  ) : null;
};

// memoized in case of the same query
export default memo(Response);
