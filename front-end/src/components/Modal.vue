<template>
  <div class="custom-modal">
    <div class="modal-content">
      <slot></slot>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('close'); // This method calls the 'close' event when the 'Close' button is clicked in the modal window.
    }
  }
};
</script>

<style scoped>
/* Styles of the modal component */
</style>

