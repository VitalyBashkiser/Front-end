<template>
  <ul>
    <li v-for="invitation in userInvitations" :key="invitation.id">
      {{ invitation.companyName }}
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['userInvitations']),
  },
};
</script>
