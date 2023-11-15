<template>
  <form @submit.prevent="handleSendInvitation">
    <input v-model="email" type="email" placeholder="Email" />
    <textarea v-model="message" placeholder="Message"></textarea>
    <button type="submit">Send Invitation</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { sendInvitation } from '@/services/companyService';

export default {
  setup() {
    const email = ref(''); // the reactive variable for email
    const message = ref(''); // reactive variable for message

    const handleSendInvitation = async () => {
      try {
        const response = await sendInvitation(email.value, message.value);
        console.log('Invitation sent:', response);
      } catch (error) {
        console.error('Error sending invitation:', error);
      }
    }

    return {
      email,
      message,
      handleSendInvitation,
    };
  },
};
</script>
