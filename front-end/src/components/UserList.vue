<template>
  <div class="user-list">
    <h2>{{ $t('userList') }}</h2>

    <ul class="list">
      <li v-for="user in userList" :key="user.id">
        <router-link :to="'/users/' + user.id">{{ user.username }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [],
    };
  },
  created() {
  },
};
</script>

<style scoped>
.user-list {
  max-width: 600px;
  margin: auto;
}

.list {
  list-style: none;
  padding: 0;
}

.list li {
  margin-bottom: 10px;
}

.list li a {
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;
}

.list li a:hover {
  color: #007bff;
}
</style>
