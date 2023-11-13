<template>
  <ul>
    <li v-for="request in joinRequests" :key="request.id">
      {{ request.email }}
      <button @click="handleAcceptRequest(request.id)">Accept</button>
      <button @click="handleCancelRequest(request.id)">Cancel</button>
      <button @click="handleRejectRequest(request.id)">Reject</button>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['joinRequests']),
  },
  methods: {
    handleAcceptRequest(requestId) {
      // Logic to accept request with ID requestId
    },

    handleCancelRequest(requestId) {
      // Logic to cancel request with ID requestId
    },

    handleRejectRequest(requestId) {
      // Logic to reject request with ID requestId
    },
  },
};
</script>
