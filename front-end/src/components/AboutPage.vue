<template>
  <div>
    <h1>{{ $t('aboutPage') }}</h1>

    <nav class="menu">
      <div class="menu-buttons">
        <button @click="openModal">{{ $t('openModal') }}</button>
        <button @click="checkHealth">{{ $t('checkHealth') }}</button>
      </div>
      <div class="dropdown">
        <button class="dropbtn">{{ $t('navigation') }}</button>
        <div class="dropdown-content">
          <router-link to="/" exact>{{ $t('home') }}</router-link>
          <router-link
            v-for="(label, path) in routeLinks"
            :key="path"
            :to="path"
          >
            {{ $t(label) }}
          </router-link>
        </div>
      </div>
    </nav>

    <UniversalModal
      :title="modalState.title"
      :visible="modalState.visible"
      @close="closeModal"
    >
      <p>This is the content of the modal window</p>
    </UniversalModal>
  </div>
</template>

<script>
import UniversalModal from '@/components/UniversalModal.vue';
import { checkHealth } from '@/api/api.js';

export default {
  components: {
    UniversalModal,
  },
  data() {
    return {
      modalState: {
        title: 'My modal window',
        visible: false,
      },
      routeLinks: {
        '/user-registration': 'userRegistration',
        '/user-authorization': 'userAuthorization',
        '/user-list': 'userList',
        '/user-profile': 'userProfile',
        '/company-list': 'companyList',
        '/admins-list': 'adminsList',
        '/company-invitation-form': 'companyInvitationForm',
        '/company-members-list': 'companyMembersList',
        '/invitations-list': 'invitationsList',
        '/join-requests-list': 'joinRequestsList',
        '/user-invitations-list': 'userInvitationsList',
        '/user-join-requests-list': 'userJoinRequestsList',
      },
    };
  },
  methods: {
    openModal() {
      this.modalState.visible = true;
    },
    closeModal() {
      this.modalState.visible = false;
    },
    async checkHealth() {
      try {
        const response = await checkHealth();
        console.log('Health Check Response:', response.data);
      } catch (error) {
        console.error('Error checking health:', error);
      }
    }
  },
};
</script>

<style scoped>
/* Styles for AboutPage component */
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px;
}

.menu-buttons button {
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}

.dropdown {
  position: relative;
}

.dropbtn {
  background-color: #444;
  color: #fff;
  padding: 10px 12px;
  font-size: 14px;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #333;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #555;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #555;
}
</style>
