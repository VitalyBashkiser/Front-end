import { createRouter, createWebHistory } from 'vue-router';
import { ref } from 'vue';
import { openUniversalModal } from './/utils';
import { createAuth0, loginWithAuth0, handleAuth0Redirect } from '@/api/auth';
import UniversalModal from '@/components/UniversalModal.vue'
import AboutPage from '@/components/AboutPage.vue';
import UserRegistration from '@/components/UserRegistration.vue';
import UserAuthorization from '@/components/UserAuthorization.vue';
import UserList from '@/components/UserList.vue';
import UserProfile from '@/components/UserProfile.vue';
import CompanyList from '@/components/CompanyList.vue';
import CompanyProfile from '@/components/CompanyProfile.vue';
import store from '@/store/index';

// Create a reactive variable for UniversalModal
const universalModal = ref({
  title: '',
  visible: false
});

// Define routes inside a ref
const routes = ref([
  {
    path: '/',
    component: AboutPage
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
]);

const router = createRouter({
  history: createWebHistory(),
  routes: routes.value // Access the routes via `.value`
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('accessToken');
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    // If the route requires authentication and the user is not authenticated,
    // redirect to the authorization page using Auth0
    await createAuth0();
    await loginWithAuth0();
  } else if (to.name === 'callback') {
    // If it is an Auth0 callback route, process it
    const user = await handleAuth0Redirect();
    localStorage.setItem('accessToken', user.sub);
    store.commit('setUser', user);
    next();
  } else {
    next();
  }
});

export default router;
export { universalModal, UniversalModal, openUniversalModal };