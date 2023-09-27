import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import UniversalModal from './components/UniversalModal.vue';

const i18n = createI18n({
  locale: 'en', // Set default language
  fallbackLocale: 'en', // Language to be used in case there is no translation
  messages: {
    en: {
      // Here we place translations for the English language
      greeting: 'Hello!',
      // ...
    },
    uk: {
      // Here we place translations for Ukrainian language
      greeting: 'Hello!',
      // ...
    },
  },
});

const app = createApp(App);

app.use(i18n).use(router).component('UniversalModal', UniversalModal).mount('#app');

export default i18n;



