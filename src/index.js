import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import LocalizationProvider from "./localization";
import GlobalStyles from "../src/styles/global";

ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider>
      <App />
      <GlobalStyles />
    </LocalizationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
