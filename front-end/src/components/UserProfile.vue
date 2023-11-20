<template>
  <div class="user-profile">
    <h2>{{ $t('userProfile') }}</h2>

    <div class="profile-details">
      <p>{{ $t('username') }}: {{ userProfile.username }}</p>
      <p>{{ $t('email') }}: {{ userProfile.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userProfile: {},
    };
  },
};
</script>

<style scoped>
.user-profile {
  max-width: 600px;
  margin: auto;
}

.profile-details {
  margin-top: 20px;
}

.profile-details p {
  margin-bottom: 10px;
}
</style>
