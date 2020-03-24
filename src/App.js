import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import { Posts, Postform, DarkModeToggle } from "./components";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DarkModeToggle />
        <Postform />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
