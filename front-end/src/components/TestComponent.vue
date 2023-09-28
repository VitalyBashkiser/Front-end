<template>
  <div>
    <p>{{ testString }}</p>
    <button @click="updateTestString('New Test String')">Change Test String</button>
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
/* Your styles, if you need them */
</style>
