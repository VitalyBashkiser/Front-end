import { createRouter, createWebHistory } from 'vue-router';
import { ref } from 'vue';
import UniversalModal from '@/components/UniversalModal.vue'
import AboutPage from '@/components/AboutPage.vue';
import UserRegistration from '@/components/UserRegistration.vue';
import UserAuthorization from '@/components/UserAuthorization.vue';
import UserList from '@/components/UserList.vue';
import UserProfile from '@/components/UserProfile.vue';
import CompanyList from '@/components/CompanyList.vue';
import CompanyProfile from '@/components/CompanyProfile.vue';

// Create a reactive variable for UniversalModal
const universalModal = ref({
  title: '',
  visible: false
});

// Function to open UniversalModal
function openUniversalModal(title) {
  universalModal.value.title = title;
  universalModal.value.visible = true;
}

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

export default router;

export { universalModal, openUniversalModal, UniversalModal };