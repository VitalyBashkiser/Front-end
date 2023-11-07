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
  render() {
    return (
      <ul>
        {/* Map through invitations and display each */}
        {this.invitations.map((invitation) => (
          <li key={invitation.id}>
            {invitation.email}
            <button onClick={() => this.handleCancelInvitation(invitation.id)}>Cancel</button>
            <button onClick={() => this.handleAcceptInvitation(invitation.id)}>Accept</button>
          </li>
        ))}
      </ul>
    );
  },
};
