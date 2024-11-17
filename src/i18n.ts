import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationID from './locales/id/translation.json';

const language = localStorage.getItem('i18nextLng') || 'id';

const resources = {
    id: {
        translation: translationID
    },
    en: {
        translation: translationEN
    }
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        debug: true,
        fallbackLng: language,
        interpolation: {
            escapeValue: false
        },
        saveMissing: true,
    });

export default i18n;
