// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
 
// 语言资源
import enTranslation from './locales/en/translation.json';
import zhTranslation from './locales/zh/translation.json';
 
const resources = {
  en: {
    translation: enTranslation
  },
  zh: {
    translation: zhTranslation
  }
};
 
i18n.use(initReactI18next) // 使用react-i18next
  .init({
    resources,
    lng: 'en', // 默认语言
    keySeparator: false, //  we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
 
export default i18n;