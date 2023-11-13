<template>
  <ul>
    <li v-for="company in companies" :key="company.id">
      {{ company.name }}
      <button @click="handleAppointAdmin(company.id)">Appoint Admin</button>
      <button @click="handleRemoveAdmin(company.id)">Remove Admin</button>
      <button @click="handleExcludeUser(company.id)">Exclude</button>
      <button @click="handleLogout(company.id)">Log Out</button>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['companies']),
  },
  methods: {
    handleAppointAdmin(companyId) {
      // Logic to appoint admin for the company with ID companyId
    },
    handleRemoveAdmin(companyId) {
      // Logic to remove admin for the company with ID companyId
    },
    handleExcludeUser(companyId) {
      // Logic to exclude user from the company with ID companyId
    },
    handleLogout(companyId) {
      // Logic to log out user from the company with ID companyId
    },
  },
};
</script>
