<template>
  <ul>
    <li v-for="invitation in invitations" :key="invitation.id">
      {{ invitation.email }}
      <button @click="handleCancelInvitation(invitation.id)">Cancel Invitation</button>
      <button @click="handleAcceptInvitation(invitation.id)">Accept Invitation</button>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['invitations']),
  },
  methods: {
    handleCancelInvitation(invitationId) {
      // Logic to cancel invitation with ID invitationId
    },

    handleAcceptInvitation(invitationId) {
      // Logic to accept invitation with ID invitationId
    },
  },
};
</script>
