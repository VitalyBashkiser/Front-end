<template>
  <ul>
    <li v-for="request in userJoinRequests" :key="request.id">
      {{ request.companyName }}
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['userJoinRequests']),
  },
};
</script>
