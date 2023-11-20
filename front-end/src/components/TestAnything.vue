<template>
  <div>
    <p>{{ $t(testString) }}</p>
    <button @click="updateTestString('New Test String')">{{ $t('changeTestString') }}</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['testString']),
  },
  methods: {
    ...mapActions(['updateTestString']),
  },
};
</script>

<style scoped>
.test-string {
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
}

.change-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.change-button:hover {
  background-color: #0056b3;
}
</style>
