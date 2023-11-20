import { createRouter, createWebHistory } from 'vue-router';
import { ref } from 'vue';
import { openUniversalModal } from './utils';
import { createAuth0, loginWithAuth0, handleAuth0Redirect } from '@/api/auth';
import store from '@/store/vuexStore';
const UniversalModal = () => import('@/components/UniversalModal.vue');
const AboutPage = () => import('@/components/AboutPage.vue');
const UserRegistration = () => import('@/components/UserRegistration.vue');
const UserAuthorization = () => import('@/components/UserAuthorization.vue');
const UserList = () => import('@/components/UserList.vue');
const UserProfile = () => import('@/components/UserProfile.vue');
const CompanyList = () => import('@/components/CompanyList.vue');
const CompanyProfile = () => import('@/components/CompanyProfile.vue');
const AdminsList = () => import('@/components/Company/AdminsList.vue');
const CompanyInvitationForm = () => import('@/components/Company/CompanyInvitationForm.vue');
const CompanyMembersList = () => import('@/components/Company/CompanyMembersList.vue');
const InvitationsList = () => import('@/components/Company/InvitationsList.vue');
const JoinRequestsList = () => import('@/components/Company/JoinRequestsList.vue');
const UserInvitationsList = () => import('@/components/Company/UserInvitationsList.vue');
const UserJoinRequestsList = () => import('@/components/User/UserJoinRequestsList.vue');


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
    path: '/company-profile/:id',
    component: CompanyProfile,
  },
  {
    path: '/admins-list',
    component: AdminsList,
  },
  {
    path: '/company-invitation-form',
    component: CompanyInvitationForm,
  },
  {
    path: '/company-members-list',
    component: CompanyMembersList,
  },
  {
    path: '/invitations-list',
    component: InvitationsList,
  },
  {
    path: '/join-requests-list',
    component: JoinRequestsList,
  },
  {
    path: '/user-invitations-list',
    component: UserInvitationsList,
  },
  {
    path: '/user-join-requests-list',
    component: UserJoinRequestsList,
  },
]);

const router = createRouter({
  history: createWebHistory(),
  routes: routes.value
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('accessToken');
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    await createAuth0();
    await loginWithAuth0();
  } else if (to.name === 'callback') {
    const user = await handleAuth0Redirect();
    localStorage.setItem('accessToken', user.sub);
    store.commit('setUser', user);
    next();
  } else {
    next();
  }
});

export default router;
export { UniversalModal, openUniversalModal };
