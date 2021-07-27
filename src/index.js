import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import LocalizationProvider from "./localization";
import GlobalStyles from "../src/styles/global";
import { SettingsProvider } from "./context/settings";

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider>
      <LocalizationProvider>
        <App />
        <GlobalStyles />
      </LocalizationProvider>
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
