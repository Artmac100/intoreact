import React, { Component } from "react";

import Form from "./components/Form";
import Response from "./components/Response";
import { UserProvider } from "./context/UserContext";

class App extends Component {
  render() {
    return (
      <div>
        <UserProvider>
          <Form />
          <div id="response">
            <Response />
          </div>
        </UserProvider>
      </div>
    );
  }
}

export default App;
