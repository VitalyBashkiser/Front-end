import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['userJoinRequests']),
  },
  render() {
    return (
      <ul>
        {/* Map through user's join requests and display each */}
        {this.userJoinRequests.map((request) => (
          <li key={request.id}>
            {request.companyName}
          </li>
        ))}
      </ul>
    );
  },
};
