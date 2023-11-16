<template>
  <form @submit.prevent="handleSendInvitation">
    <input v-model="email" type="email" placeholder="{{ $t('emailPlaceholder') }}" />
    <textarea v-model="message" placeholder="{{ $t('messagePlaceholder') }}"></textarea>
    <button type="submit">{{ $t('sendInvitation') }}</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { sendInvitation } from '@/services/companyService';

export default {
  setup() {
    const email = ref('');
    const message = ref('');

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
