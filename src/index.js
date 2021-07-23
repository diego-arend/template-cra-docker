import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import LocalizationProvider from "./localization";

ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider>
      <App />
    </LocalizationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
