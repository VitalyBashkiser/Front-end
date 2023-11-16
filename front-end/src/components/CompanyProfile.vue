<template>
  <div>
    <h1>Company Profile</h1>
    <h2>Admins</h2>
    <ul>
      <li v-for="admin in admins" :key="admin.id">
        {{ admin.name }}
        <button @click="removeAdmin(admin.id)">Remove Admin</button>
      </li>
    </ul>
    <h2>Manage Admins</h2>
    <select v-model="selectedAdmin" :options="adminOptions"></select>
    <button @click="appointAdmin">Appoint Admin</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyId: null, // Add a companyId to store the current company ID
      admins: [], // This should be the list of administrators
      adminOptions: [], // This should be the list of possible administrators
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
  },
  mounted() {
    // Get the company id from the path parameters
    this.companyId = this.$route.params.id;
    // Get and display the current administrators when the component is loaded
    this.fetchAdmins();
    // Get and display the list of possible administrators when loading the component
    this.fetchAdminOptions();
  },
  watch: {
    // Update the list of possible administrators when the current administrators change
    admins: 'fetchAdminOptions',
  },
  methods: {
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
        const response = await this.$axios.get(`/users/`); // Assume you have an endpoint to fetch the list of users
        this.adminOptions = response.data.map(admin => ({
          label: admin.name,
          value: admin.id,
        }));
      } catch (error) {
        console.error('Error fetching admin options:', error);
      }
    },
  },
};
</script>