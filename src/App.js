import React from "react";
import Body from "./Component/Body";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <Body></Body>
    </Provider>
  );
};

export default App;
