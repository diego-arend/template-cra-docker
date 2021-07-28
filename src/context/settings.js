import React, { createContext, useState } from "react";
import { initLOCALE } from "./../constants/listconstants";

export const SettingsContext = createContext([
  { locale: "" },
  () => {},
]);

export const SettingsProvider = ({ children }) => {
  const [state, setState] = useState({ locale: initLOCALE });
  return (
    <SettingsContext.Provider value={[state, setState]}>
      {children}
    </SettingsContext.Provider>
  );
};
