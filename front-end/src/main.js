import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import UniversalModal from './components/UniversalModal.vue';
import store from './store';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      greeting: 'Hello!',
      // ... add other keys and values for English
    },
    uk: {
      greeting: 'Привіт!',
      // ... add other keys and values for Ukrainian
    },
  },
});

const app = createApp(App);

app.use(i18n).use(store).use(router).component('UniversalModal', UniversalModal).mount('#app');

const changeLanguage = (lang) => {
  i18n.global.locale = lang;
  localStorage.setItem('language', lang);
};

const savedLanguage = localStorage.getItem('language');
if (savedLanguage) {
  changeLanguage(savedLanguage);
}

export { app, i18n, changeLanguage };
