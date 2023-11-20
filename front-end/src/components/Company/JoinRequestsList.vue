<template>
  <ul>
    <li v-for="request in joinRequests" :key="request.id">
      {{ request.email }}
      <button @click="handleAcceptRequest(request.id)">
        {{ $t('acceptJoinRequest') }}
      </button>
      <button @click="handleCancelRequest(request.id)">
        {{ $t('cancelJoinRequest') }}
      </button>
      <button @click="handleRejectRequest(request.id)">
        {{ $t('rejectJoinRequest') }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    joinRequests() {
      return this.$store.state.joinRequests;
    }
  },
  methods: {
    handleAcceptRequest(requestId) {
      this.$store.dispatch('acceptRequest', requestId);
    },
    handleCancelRequest(requestId) {
      this.$store.dispatch('cancelRequest', requestId);
    },
    handleRejectRequest(requestId) {
      this.$store.dispatch('rejectRequest', requestId);
    },
  },
};
</script>
