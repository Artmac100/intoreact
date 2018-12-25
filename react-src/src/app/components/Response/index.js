import React, { useContext, memo } from "react";

import UserContext from "../../context/UserContext";
import ResponseItem from "../ResponseItem";

const Response = () => {
  // get state from context
  const { userState } = useContext(UserContext);
  const { error, users } = userState;

  if (error) return <div>{error}</div>;

  return (
    <div>
      {users.length
        ? users.map(user => <ResponseItem key={user.id} user={user} />)
        : null}
    </div>
  );
};

// memoized in case of the same query
export default memo(Response);
