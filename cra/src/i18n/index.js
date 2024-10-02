// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import lang_en from './lang_en';
import lang_vi from './lang_vi';

// Các ngôn ngữ hỗ trợ
const resources = {
  en: lang_en,
  vi: lang_vi
};

i18n
  .use(initReactI18next) // Chuyển đổi i18next sang React
  .init({
    resources,
    lng: 'en', // Ngôn ngữ mặc định
    fallbackLng: 'en', // Ngôn ngữ fallback
    interpolation: {
      escapeValue: false, // Không cần escape cho React
    },
  });

export default i18n;