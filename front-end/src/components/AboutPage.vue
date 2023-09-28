<template>
  <div>
    <h1>About Page</h1>
    <button @click="openModal">Open Modal Window</button>

    <!-- Modal Window -->
    <UniversalModal :title="modalState.title" v-if="modalState.visible" @close="modalState.visible = false">
      <!-- The contents of the modal window -->
      <p>This is the content of the modal window</p>
      <button @click="modalState.visible = false">Close</button>
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
  },
};
</script>