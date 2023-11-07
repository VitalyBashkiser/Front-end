import { ref } from 'vue';

export default {
  setup() {
    const handleSendInvitation = () => {
      // Logic to send invitation
    }

    const email = ref(''); // the reactive variable for email
    const message = ref(''); // reactive variable for message

    return {
      handleSendInvitation,
      email,
      message,
    };
  },
  render() {
    return (
      <form>
        {/* Form fields for invitation (e.g., email, message) */}
        <input v-model={this.email} type="email" placeholder="Email" />
        <textarea v-model={this.message} placeholder="Message" />
        <button onClick={this.handleSendInvitation}>Send Invitation</button>
      </form>
    );
  },
};