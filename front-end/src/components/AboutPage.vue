<template>
  <div>
    <h1>About Page</h1>
    <button @click="openModal">Open Modal Window</button>

    <UniversalModal
      :title="modalState.title"
      :visible="modalState.visible"
      @close="closeModal"
    >
      <p>This is the content of the modal window</p>
    </UniversalModal>

    <button @click="checkHealth">Check Health</button>
  </div>
</template>

<script>
import UniversalModal from '@/components/UniversalModal.vue';
import { checkHealth } from '@/api/api.js';

export default {
  components: {
    UniversalModal,
  },
  data() {
    return {
      modalState: {
        title: 'My modal window', // Set default title
        visible: false, // Initial state is hidden
      },
    };
  },
  methods: {
    openModal() {
      this.modalState.visible = true;
    },
    closeModal() {
      this.modalState.visible = false;
    },
    async checkHealth() {
      try {
        const response = await checkHealth();
        console.log('Health Check Response:', response.data);
      } catch (error) {
        console.error('Error checking health:', error);
      }
    }
  },
};
</script>

<style scoped>
/* Styles for AboutPage component */
</style>
