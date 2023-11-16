import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import UniversalModal from './components/UniversalModal.vue';
import store from './store'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      greeting: 'Hello!',
      appointAdmin: 'Appoint Admin',
      removeAdmin: 'Remove Admin',
      excludeUser: 'Exclude',
      logout: 'Log Out',
      emailPlaceholder: 'Email',
      messagePlaceholder: 'Message',
      sendInvitation: 'Send Invitation',
      cancelInvitation: 'Cancel Invitation',
      acceptInvitation: 'Accept Invitation',
      cancelJoinRequest: 'Cancel Join Request',
      acceptJoinRequest: 'Accept Join Request',
      rejectJoinRequest: 'Reject Join Request',
      removeAdmin: 'Remove Admin',
      quiz: {
        companyQuizzes: 'Company Quizzes',
        createQuiz: 'Create Quiz',
        takeQuiz: 'Take Quiz',
        title: 'Title',
        description: 'Description',
        frequency: 'Frequency',
        addQuestion: 'Add Question',
        createQuiz: 'Create Quiz'
      }
      companyAnalytics: {
        title: 'Company Analytics',
        analyticsButton: 'Analytics',
        lastTestTaken: 'Last test taken:'
      }
      userProfile: {
      title: 'User Profile',
      basicInformation: 'Basic Information',
      name: 'Name',
      email: 'Email',
      about: 'About',
      save: 'Save',
      companies: 'Companies',
      leave: 'Leave',
      cumulativeRating: 'Cumulative Rating',
      confirmationMessage: 'Are you sure you want to leave this company?',
      yes: 'Yes',
      no: 'No',
      }
    },
    uk: {
      greeting: 'Привіт!',
      appointAdmin: 'Призначити адміністратора',
      removeAdmin: 'Видалити адміністратора',
      excludeUser: 'Виключити',
      logout: 'Вийти',
      emailPlaceholder: 'Електронна пошта',
      messagePlaceholder: 'Повідомлення',
      sendInvitation: 'Надіслати запрошення',
      cancelInvitation: 'Скасувати запрошення',
      acceptInvitation: 'Прийняти запрошення',
      cancelJoinRequest: 'Скасувати запит на вступ',
      acceptJoinRequest: 'Прийняти запит на вступ',
      rejectJoinRequest: 'Відхилити запит на вступ',
      removeAdmin: 'Видалити адміністратора',
      quiz: {
        companyQuizzes: 'Квізи компанії',
        createQuiz: 'Створити квіз',
        takeQuiz: 'Пройти квіз',
        title: 'Назва',
        description: 'Опис',
        frequency: 'Частота',
        addQuestion: 'Додати питання',
        createQuiz: 'Створити квіз'
      }
      companyAnalytics: {
        title: 'Аналітика компанії',
        analyticsButton: 'Аналітика',
        lastTestTaken: 'Останній тест:'
      }
      userProfile: {
      title: 'Профіль користувача',
      basicInformation: 'Основна інформація',
      name: "Ім'я",
      email: 'Електронна пошта',
      about: 'Про мене',
      save: 'Зберегти',
      companies: 'Компанії',
      leave: 'Вийти',
      cumulativeRating: 'Загальний рейтинг',
      confirmationMessage: 'Ви впевнені, що хочете покинути цю компанію?',
      yes: 'Так',
      no: 'Ні',
      }
    },
  },
});


const app = createApp(App);

app.use(i18n).use(store).use(router).component('UniversalModal', UniversalModal).mount('#app');

export default i18n;



