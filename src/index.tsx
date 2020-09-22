import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureAppStore from "./store/configureStore";

const store = configureAppStore();

const App : React.FC = () => {
  return <>boilerplate v 1.0</>;
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
