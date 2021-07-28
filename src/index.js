import React from "react";
import ReactDOM from "react-dom";
import LocalizationProvider from "./translation/localization";
import { SettingsProvider } from "./context/settings";
import BrowserRouter from './components/Router'

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider>
      <LocalizationProvider>
        <BrowserRouter />
      </LocalizationProvider>
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
