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
export default {
  computed: {
    invitations() {
      return this.$store.state.invitations;
    }
  },
  methods: {
    handleCancelInvitation(invitationId) {
      this.$store.dispatch('cancelInvitation', invitationId);
    },
    handleAcceptInvitation(invitationId) {
      this.$store.dispatch('acceptInvitation', invitationId);
    },
  },
};
</script>
