import React from "react";
import ReactDOM from "react-dom";
import LocalizationProvider from "./translation/localization";
import { SettingsProvider } from "./context/settings";
import BrowserRouter from './browserRouter'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider>
      <LocalizationProvider>
        <BrowserRouter history={history}/>
      </LocalizationProvider>
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
