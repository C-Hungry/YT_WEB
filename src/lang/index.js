import Vue from "vue";
import VueI18n from "vue-i18n";
import elementEnLocale from "element-ui/lib/locale/lang/en";
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN";
import enLocale from "./en";
import zhLocale from "./zh";
Vue.use(VueI18n);
const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
};
export function getLanguage() {
  const language =
    localStorage.getItem("language") ||
    (
      window.navigator.language ||
      window.navigator.browserLanguage ||
      window.navigator.userLanguage ||
      window.navigator.systemLanguage
    ).toLowerCase() ||
    "zh";
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  return language;
}
const i18n = new VueI18n({
  // set locale
  // options: en | zh
  locale: getLanguage() || "zh",
  // set locale messages
  messages,
  silentTranslationWarn: true
});

export default i18n;
