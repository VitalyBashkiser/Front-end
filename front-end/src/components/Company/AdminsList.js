import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['admins']),
  },
  render() {
    return (
      <ul>
        {/* Map through admins and display each */}
        {this.admins.map((admin) => (
          <li key={admin.id}>
            {admin.name}
            <button onClick={() => this.handleRemoveAdmin(admin.id)}>Remove Admin</button>
          </li>
        ))}
      </ul>
    );
  },
};