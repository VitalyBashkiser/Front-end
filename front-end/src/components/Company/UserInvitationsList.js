import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['userInvitations']),
  },
  render() {
    return (
      <ul>
        {/* Map through user's invitations and display each */}
        {this.userInvitations.map((invitation) => (
          <li key={invitation.id}>
            {invitation.companyName}
          </li>
        ))}
      </ul>
    );
  },
};
