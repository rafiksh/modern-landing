import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import ar from "./locales/ar";

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    ar: ar,
  },
  fallbackLng: ["en", "ar"],
  debug: false,

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ",",
  },

  react: {
    wait: true,
  },
});

export default i18n;
