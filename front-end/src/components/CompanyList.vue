<template>
  <div>
    <h1>Company List</h1>
    <table>
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company in companies" :key="company.id">
          <td>{{ company.name }}</td>
          <td>
            <button @click="showAdmins(company.id)">View Admins</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companies: [], // List of companies
    };
  },
  methods: {
    async showAdmins(companyId) {
      try {
        // Get the admin data for the selected company
        const response = await this.$axios.get(`/companies/list_admins/${companyId}/`);
        const admins = response.data;

        // You may want to do something with this list of admins, such as displaying it in a modal window
        console.log('Admins for company', companyId, admins);
      } catch (error) {
        console.error('Error fetching admins:', error);
      }
    },
    async fetchCompanies() {
      try {
        // Get the companies data
        const response = await this.$axios.get('/companies/');
        this.companies = response.data;
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    },
  },
  mounted() {
    // Call the method to fetch the list of companies when the component is loaded
    this.fetchCompanies();
  },
};
</script>