import React from "react";
import ReactDOM from "react-dom";
import App from "fadedgold/App";
import reportWebVitals from "./reportWebVitals";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { BrowserRouter } from "react-router-dom";
import "fadedgold/i18n";
import { store } from "fadedgold/redux/store";
import { Provider } from "react-redux";

initializeIcons();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
