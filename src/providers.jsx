import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import global_en from './locales/en.json';


export function Providers({ children }) {
  const DETECTION_OPTIONS = {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage']
  };

  let usedLang = useEffect(() => {
     localStorage.getItem("language") ? JSON.parse(localStorage.getItem("language")) : 'en';
  }, []);

  i18next.init({
    interpolation: {
      escapeValue: false,
    },
    detection: DETECTION_OPTIONS,
    lng: usedLang,
    resources: {
      en: {
        global: global_en
      }
    }
  });

  i18next
    .use(LanguageDetector)
    .use(initReactI18next)

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}