<template>
  <div>
    <h1>{{ $t('userProfile.title') }}</h1>

    //Basic information
    <div>
      <h2>{{ $t('userProfile.basicInformation') }}</h2>
      <form @submit.prevent="updateUserInfo">
        <label>{{ $t('userProfile.name') }}:</label>
        <input v-model="userInfo.name" required>

        <label>{{ $t('userProfile.email') }}:</label>
        <input v-model="userInfo.email" required>

        <label>{{ $t('userProfile.about') }}:</label>
        <textarea v-model="userInfo.about"></textarea>

        <button type="submit">{{ $t('userProfile.save') }}</button>
      </form>
    </div>

    //List of companies 
    <div>
      <h2>{{ $t('userProfile.companies') }}</h2>
      <ul>
        <li v-for="company in userCompanies" :key="company.id">
          {{ company.name }} - <button @click="leaveCompany(company.id)">{{ $t('userProfile.leave') }}</button>
        </li>
      </ul>
    </div>

    //Cumulative rating
    <div>
      <h2>{{ $t('userProfile.cumulativeRating') }}</h2>
      //Display cumulative rating using stars or other graphical elements
      //Insert your implementation here
    </div>

    //Modal for confirmation
    <div v-if="showConfirmationModal">
      <p>{{ $t('userProfile.confirmationMessage') }}</p>
      <button @click="confirmLeave">{{ $t('userProfile.yes') }}</button>
      <button @click="cancelLeave">{{ $t('userProfile.no') }}</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userInfo: {
        name: '',
        email: '',
        about: ''
      },
      userCompanies: [],
      showConfirmationModal: false,
      companyToLeaveId: null
    };
  },
  mounted() {
    this.fetchUserInfo();
    this.fetchUserCompanies();
  },
  methods: {
    // ...
  }
};
</script>
