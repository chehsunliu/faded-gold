import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "tw",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
    },
  })
  .then((_) => console.debug("Finished i18n initialization"));

export default i18n;
