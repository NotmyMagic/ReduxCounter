import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
