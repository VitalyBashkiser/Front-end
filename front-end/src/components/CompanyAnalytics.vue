<template>
  <div>
    <h1>{{ $t('companyAnalytics.title') }}</h1>
    <button v-if="isOwnerOrAdmin" @click="showAnalytics">{{ $t('companyAnalytics.analyticsButton') }}</button>
    <div v-if="showAnalyticsPanel">
      //Chart to display Average Scores of all users over time
      <canvas ref="averageScoresChart" width="400" height="400"></canvas>

      //Dropdown to select specific user
      <select v-if="isOwnerOrAdmin" v-model="selectedUser" @change="getUserAnalytics">
        <option v-for="user in companyUsers" :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>

      //Chart to display Average Scores across all quizzes for selected user over time
      <canvas v-if="selectedUser" ref="userScoresChart" width="400" height="400"></canvas>
    </div>
    <ul v-if="isOwnerOrAdmin">
      <li v-for="user in companyUsers" :key="user.id">
        {{ user.name }} - {{ $t('companyAnalytics.lastTestTaken') }} {{ user.lastTestTakenTime }}
      </li>
    </ul>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  data() {
    return {
      isOwnerOrAdmin: false,
      showAnalyticsPanel: false,
      selectedUser: null,
      companyUsers: [],
      averageScoresData: [],
      userScoresData: [],
    };
  },
  methods: {
    showAnalytics() {
      this.showAnalyticsPanel = true;
      this.drawAverageScoresChart();
    },
    getUserAnalytics() {
      if (this.selectedUser) {
        this.drawUserScoresChart(this.selectedUser);
      }
    },
    drawAverageScoresChart() {
      // Logic to fetch and populate average scores data from backend
    },
    drawUserScoresChart(userId) {
      // Logic to fetch and populate data for selected user from backend
    },
    fetchCompanyUsers() {
      // Logic to fetch company users data from backend API
    },
    fetchAnalyticsData() {
      // Logic to fetch analytics data (average scores, etc.) from backend API
    },
  },
  mounted() {
    this.fetchCompanyUsers();
    this.fetchAnalyticsData();
  },
};
</script>

