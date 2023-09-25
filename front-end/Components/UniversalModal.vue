<template>
  <div class="universal-modal">
    <div class="modal-content">
      <h2>{{ title }}</h2>

      <slot></slot>

      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.universal-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

button {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 12px;
}

button:hover {
  background-color: #0056b3;
}
</style>
