import React, { useContext, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import english from "./en-US";
import portuguese from "./pt-BR";
import spanish from "./es-ES";
import { initLOCALE } from "../constants/listconstants";
import { SettingsContext } from "../context/settings";

const locales = {
  "en-US": english,
  "pt-BR": portuguese,
  "es-ES": spanish,
};

const LocalizationProvider = ({ children, ...props }) => {
  const [settingsLocale] = useContext(SettingsContext);
  const [currentLocale, setCurrentLocale] = useState(locales[initLOCALE]);

  useEffect(() => {
    setCurrentLocale(locales[settingsLocale.locale]);
  }, [settingsLocale]);

  return (
    <IntlProvider
      locale={currentLocale.locale}
      messages={currentLocale.messages}
    >
      {children}
    </IntlProvider>
  );
};

export default LocalizationProvider;
