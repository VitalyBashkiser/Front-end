<template>
  <ul>
    <li v-for="invitation in invitations" :key="invitation.id">
      {{ invitation.email }}
      <button @click="handleCancelInvitation(invitation.id)">
        {{ $t('cancelInvitation') }}
      </button>
      <button @click="handleAcceptInvitation(invitation.id)">
        {{ $t('acceptInvitation') }}
      </button>
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
