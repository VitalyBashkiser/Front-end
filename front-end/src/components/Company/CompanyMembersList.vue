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
export default {
  computed: {
    companies() {
      return this.$store.state.companies;
    }
  },
  methods: {
    handleAppointAdmin(companyId) {
      this.$store.dispatch('appointAdmin', companyId);
    },
    handleRemoveAdmin(companyId) {
      this.$store.dispatch('removeAdminForCompany', companyId);
    },
    handleExcludeUser(companyId) {
      this.$store.dispatch('excludeUser', companyId);
    },
    handleLogout(companyId) {
      this.$store.dispatch('logoutCompany', companyId);
    },
  },
};
</script>
