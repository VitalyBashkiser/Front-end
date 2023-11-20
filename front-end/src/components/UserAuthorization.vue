<template>
  <form @submit.prevent="login" class="authorization-form">
    <div class="form-group">
      <input v-model="email" placeholder="Email" class="form-input" />
    </div>

    <div class="form-group">
      <input v-model="password" placeholder="Password" type="password" class="form-input" />
    </div>

    <button type="submit" class="submit-button">{{ $t('login') }}</button>
  </form>
</template>

<script>
import { axiosInstance } from '@/api/axios.js';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axiosInstance.post('/auth/token/login/', {
          username: this.username,
          password: this.password,
        });
        console.log('Login Response:', response.data);
      } catch (error) {
        console.error('Error logging in:', error);
      }
    },
  },
};
</script>

<style scoped>
.authorization-form {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

.form-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.submit-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
