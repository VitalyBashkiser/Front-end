<template>
  <form @submit.prevent="handleSendInvitation">
    <input v-model="email" type="email" :placeholder="$t('emailPlaceholder')" />
    <textarea v-model="message" :placeholder="$t('messagePlaceholder')"></textarea>
    <button type="submit">{{ $t('sendInvitation') }}</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: ''
    };
  },
  methods: {
    async handleSendInvitation() {
      try {
        const response = await this.$store.dispatch('sendInvitation', {
          email: this.email,
          message: this.message
        });
        console.log('Invitation sent:', response);
      } catch (error) {
        console.error('Error sending invitation:', error);
      }
    }
  }
};
</script>
