<template>
  <form @submit.prevent="register" class="registration-form">
    <div class="form-group">
      <input v-model="email" @blur="validateEmail" placeholder="Email" class="form-input" />
      <span v-if="emailError" class="error-message">{{ emailError }}</span>
    </div>

    <div class="form-group">
      <input v-model="password" placeholder="Password" type="password" class="form-input" />
    </div>

    <div class="form-group">
      <input v-model="confirmPassword" @blur="validatePassword" placeholder="Confirm Password" type="password" class="form-input" />
      <span v-if="passwordError" class="error-message">{{ passwordError }}</span>
    </div>

    <button type="submit" class="submit-button">{{ $t('register') }}</button>
  </form>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      emailError: '',
      passwordError: '',
    };
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.emailError = 'Invalid email format';
      } else {
        this.emailError = '';
      }
    },
    validatePassword() {
      if (this.password.length < 8) {
        this.passwordError = 'Password must be at least 8 characters long';
      } else {
        this.passwordError = '';
      }
    },
    async register() {
      try {
        const response = await axios.post('/auth/users/', {
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword,
        });
        console.log('Registration Response:', response.data);
      } catch (error) {
        console.error('Error registering:', error.response.data);
      }
    },
  },
};
</script>

<style scoped>
.registration-form {
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

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
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
