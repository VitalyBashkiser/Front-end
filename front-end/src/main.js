import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import UniversalModal from './components/UniversalModal.vue';
import store from './store/vuexStore';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
    greeting: 'Hello!',
      admins: 'Admins',
      closeModal: 'Close',
      logout: 'Log Out',
      english: 'English',
      ukrainian: 'Ukrainian',
      aboutPage: 'About Page',
      manageAdmins: 'Manage Admins',
      appointAdmin: 'Appoint Admin',
      removeAdmin: 'Remove Admin',
      changeTestString: 'Change Test String',
      companyProfile: 'Company Profile',
      excludeUser: 'Exclude',
      emailPlaceholder: 'Email',
      messagePlaceholder: 'Message',
      userRegistration: 'User Registration',
      userProfile: 'User Profile',
      userList: 'User List',
      userAuthorization: 'User Authorization',
      sendInvitation: 'Send Invitation',
      cancelInvitation: 'Cancel Invitation',
      acceptInvitation: 'Accept Invitation',
      cancelJoinRequest: 'Cancel Join Request',
      acceptJoinRequest: 'Accept Join Request',
      rejectJoinRequest: 'Reject Join Request',
    quiz: {
      companyQuizzes: 'Company Quizzes',
      createQuiz: 'Create Quiz',
      takeQuiz: 'Take Quiz',
      title: 'Title',
      description: 'Description',
      frequency: 'Frequency',
      addQuestion: 'Add Question',
      }
      // ... other keys and values for English
    },
    uk: {
    greeting: 'Привіт!',
      logout: 'Вийти',
      closeModal: 'Закрити',
      excludeUser: 'Виключити',
      admins: 'Адміністратори',
      english: 'Англійська',
      ukrainian: 'Українська',
      aboutPage: 'Про сторінку',
      manageAdmins: 'Керувати адміністраторами',
      appointAdmin: 'Призначити адміністратора',
      removeAdmin: 'Видалити адміністратора',
      changeTestString: 'Змінити тестовий рядок',
      companyProfile: 'Профіль компанії',
      emailPlaceholder: 'Електронна пошта',
      messagePlaceholder: 'Повідомлення',
      userRegistration: 'Реєстрація користувача',
      userProfile: 'Профіль користувача',
      userList: 'Список користувачів',
      userAuthorization: 'Авторизація користувача',
      sendInvitation: 'Надіслати запрошення',
      cancelInvitation: 'Скасувати запрошення',
      acceptInvitation: 'Прийняти запрошення',
      cancelJoinRequest: 'Скасувати запит на вступ',
      acceptJoinRequest: 'Прийняти запит на вступ',
      rejectJoinRequest: 'Відхилити запит на вступ',
    quiz: {
      companyQuizzes: 'Квізи компанії',
      createQuiz: 'Створити квіз',
      takeQuiz: 'Пройти квіз',
      title: 'Назва',
      description: 'Опис',
      frequency: 'Частота',
      addQuestion: 'Додати питання',
      }
      // ... other keys and values for Ukrainian
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
