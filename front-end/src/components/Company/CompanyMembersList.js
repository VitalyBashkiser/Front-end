import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['companies']),
  },
  methods: {
    handleExcludeUser(userId) {
      // Logic to exclude user with ID userId
    },

    handleLogout(userId) {
      // Logic to log out user with ID userId
    },
  },
  render() {
    return (
      <ul>
        {/* Map through members and display each */}
        {this.companies.map((company) => (
          <li key={company.id}>
            {company.name}
            <button onClick={() => this.handleExcludeUser(company.id)}>Exclude</button>
            <button onClick={() => this.handleLogout(company.id)}>Log Out</button>
          </li>
        ))}
      </ul>
    );
  },
};
