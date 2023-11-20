<template>
  <ul>
    <li v-for="admin in adminList" :key="admin.id">
      {{ admin.name }}
      <button @click="handleRemoveAdmin(admin.id)">{{ $t('removeAdmin') }}</button>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['admins']),
    adminList() {
      return this.admins;
    },
  },
  methods: {
    handleRemoveAdmin(adminId) {
      this.$store.dispatch('removeAdmin', adminId);
    },
  },
};
</script>
