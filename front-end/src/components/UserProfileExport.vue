<template>
  <div>
    <h1>{{ $t('userProfile.title') }}</h1>
    <button @click="exportUserData('json')">{{ $t('exportData.json') }}</button>
    <button @click="exportUserData('csv')">{{ $t('exportData.csv') }}</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    exportUserData(format) {
      const userId = this.$store.state.user.id; // Get the current user ID from the Vuex repository
      axios.get(`/api/quizzes/export/${format}/`) // Access to a new endpoint for exporting
        .then(response => {
          this.downloadFile(response.data, format);
        })
        .catch(error => {
          console.error('Error exporting user data', error);
        });
    },
    downloadFile(data, format) {
      const filename = format === 'json' ? 'data.json' : 'data.csv';
      const blob = new Blob([data], { type: format === 'json' ? 'application/json' : 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
</script>
