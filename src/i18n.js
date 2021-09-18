import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import ar from "./locales/ar";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    resources: {
      en: en,
      ar: ar,
    },
    fallbackLng: "en",
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ",",
    },
  });

export default i18n;
