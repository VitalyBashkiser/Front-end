<template>
  <ul>
    <li v-for="company in companies" :key="company.id">
      {{ company.name }}
      <button @click="handleAppointAdmin(company.id)">{{ $t('appointAdmin') }}</button>
      <button @click="handleRemoveAdmin(company.id)">{{ $t('removeAdmin') }}</button>
      <button @click="handleExcludeUser(company.id)">{{ $t('excludeUser') }}</button>
      <button @click="handleLogout(company.id)">{{ $t('logout') }}</button>
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
    // Other methods...
  },
};
</script>
