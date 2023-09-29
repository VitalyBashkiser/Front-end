<template>
  <div>
    <h1>About Page</h1>
    <button @click="openModal">Open Modal Window</button>

    <!-- Modal Window -->
    <UniversalModal
      :title="modalState.title"
      :visible="modalState.visible"
      @close="closeModal"
    >
      <p>This is the content of the modal window</p>
    </UniversalModal>
  </div>
</template>

<script>
import UniversalModal from '@/components/UniversalModal.vue';

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
  },
};
</script>

<style scoped>
/* Styles for AboutPage component */
</style>
