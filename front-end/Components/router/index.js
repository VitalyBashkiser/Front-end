import { createRouter, createWebHistory } from 'vue-router';

// Import components
import About from '../components/About.vue';
import UserRegistration from '../components/UserRegistration.vue';
import UserAuthorization from '../components/UserAuthorization.vue';
import UserList from '../components/UserList.vue';
import UserProfile from '../components/UserProfile.vue';
import CompanyList from '../components/CompanyList.vue';
import CompanyProfile from '../components/CompanyProfile.vue';

// Import component for universal modal window
import UniversalModal from '../components/UniversalModal.vue';

// Define routes
const routes = [
  {
    path: '/',
    component: About
  },
  {
    path: '/user-registration',
    component: UserRegistration
  },
  {
    path: '/user-authorization',
    component: UserAuthorization
  },
  {
    path: '/user-list',
    component: UserList
  },
  {
    path: '/user-profile',
    component: UserProfile
  },
  {
    path: '/company-list',
    component: CompanyList
  },
  {
    path: '/company-profile',
    component: CompanyProfile
  }
];

// Creating a router
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Export router
export default router;

// Export of the universal modal window component
export { UniversalModal };