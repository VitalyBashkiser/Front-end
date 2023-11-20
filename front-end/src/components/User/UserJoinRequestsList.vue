<template>
  <ul>
    <li v-for="request in userJoinRequests" :key="request.id">
      {{ request.companyName }}
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    userJoinRequests() {
      return this.$store.state.userJoinRequests;
    }
  },
};
</script>
