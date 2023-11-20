<template>
  <ul>
    <li v-for="invitation in userInvitations" :key="invitation.id">
      {{ invitation.companyName }}
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    userInvitations() {
      return this.$store.state.userInvitations;
    }
  },
};
</script>
