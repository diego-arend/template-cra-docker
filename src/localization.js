import React from "react";
import { IntlProvider } from "react-intl";
import english from "./locales/en-US";
import portuguese from "./locales/pt-BR";
import spanish from "./locales/es-ES";
import { LOCALE } from "./constants/listconstants";

const locales = {
  "en-US": english,
  "pt-BR": portuguese,
  "es-ES": spanish,
};

const LocalizationProvider = ({ children, locale = LOCALE }) => {
  const currentLocale = locales[locale];
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
