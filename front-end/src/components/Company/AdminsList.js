<template>
  <ul>
    <li v-for="admin in admins" :key="admin.id">
      {{ admin.name }}
      <button @click="handleRemoveAdmin(admin.id)">Remove Admin</button>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['admins']),
  },
  methods: {
    handleRemoveAdmin(adminId) {
      // Logic to remove admin with ID adminId
    },
  },
};
</script>
