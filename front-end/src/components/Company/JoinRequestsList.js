import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['joinRequests']),
  },
  methods: {
    handleAcceptRequest(requestId) {
      // Logic to accept request with ID requestId
    },

    handleCancelRequest(requestId) {
      // Logic to cancel request with ID requestId
    },

    handleRejectRequest(requestId) {
      // Logic to reject request with ID requestId
    },
  },
  render() {
    return (
      <ul>
        {/* Map through join requests and display each */}
        {this.joinRequests.map((request) => (
          <li key={request.id}>
            {request.email}
            <button onClick={() => this.handleAcceptRequest(request.id)}>Accept</button>
            <button onClick={() => this.handleCancelRequest(request.id)}>Cancel</button>
            <button onClick={() => this.handleRejectRequest(request.id)}>Reject</button>
          </li>
        ))}
      </ul>
    );
  },
};
