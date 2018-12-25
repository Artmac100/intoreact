import React, { useState, useContext } from "react";
import { debounce } from "lodash";

import { getUsers } from "../../actions";
import UserContext from "../../context/UserContext";

const Form = () => {
  const { dispatch } = useContext(UserContext);

  const [userInput, setInput] = useState("");

  const handleSubmit = debounce(() => {
    const username = userInput.trim();
    getUsers("https://api.github.com/users/" + username, dispatch);
  }, 300);

  return (
    <div>
      <input
        type="text"
        id="username-input"
        onChange={e => setInput(e.target.value)}
      />
      <button id="search" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default Form;
