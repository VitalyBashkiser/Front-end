<template>
  <div>
    <h1>{{ $t('companyProfile') }}</h1>
    <h2>{{ $t('admins') }}</h2>
    <ul>
      <li v-for="admin in admins" :key="admin.id">
        {{ admin.name }}
        <button @click="removeAdmin(admin.id)">{{ $t('removeAdmin') }}</button>
      </li>
    </ul>
    <h2>{{ $t('manageAdmins') }}</h2>
    <select v-model="selectedAdmin" :options="adminOptions"></select>
    <button @click="appointAdmin">{{ $t('appointAdmin') }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyId: null,
      admins: [],
      adminOptions: [],
      selectedAdmin: null,
    };
  },
  methods: {
    async removeAdmin(adminId) {
      try {
        await this.$axios.post(`/companies/remove_admin/${this.companyId}/${adminId}/`);
        this.admins = this.admins.filter(admin => admin.id !== adminId);
      } catch (error) {
        console.error('Error removing admin:', error);
      }
    },
    async appointAdmin() {
      try {
        await this.$axios.post(`/companies/appoint_admin/${this.companyId}/${this.selectedAdmin}/`);
        const selectedAdmin = this.adminOptions.find(option => option.value === this.selectedAdmin);
        this.admins.push(selectedAdmin);
      } catch (error) {
        console.error('Error appointing admin:', error);
      }
    },
    async fetchAdmins() {
      try {
        const response = await this.$axios.get(`/companies/list_admins/${this.companyId}/`);
        this.admins = response.data;
      } catch (error) {
        console.error('Error fetching admins:', error);
      }
    },
    async fetchAdminOptions() {
      try {
        const response = await this.$axios.get(`/users/`);
        this.adminOptions = response.data.map(admin => ({
          label: admin.name,
          value: admin.id,
        }));
      } catch (error) {
        console.error('Error fetching admin options:', error);
      }
    },
  },
  mounted() {
    this.companyId = this.$route.params.id;
    this.fetchAdmins();
    this.fetchAdminOptions();
  },
  watch: {
    admins: 'fetchAdminOptions',
  },
};
</script>
