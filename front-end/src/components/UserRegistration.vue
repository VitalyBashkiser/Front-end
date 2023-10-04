<template>
  <form @submit.prevent="register">
    <div>
      <input v-model="email" @blur="validateEmail" placeholder="Email" />
      <span v-if="emailError">{{ emailError }}</span>
    </div>

    <div>
      <input v-model="password" placeholder="Password" type="password" />
    </div>

    <div>
      <input v-model="confirmPassword" @blur="validatePassword" placeholder="Confirm Password" type="password" />
      <span v-if="passwordError">{{ passwordError }}</span>
    </div>

    <button type="submit">Register</button>
  </form>
</template>

<script>
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
  register() {
      // Realization of registration
    },
  },
};
</script>

<style scoped>
/* Styles of UserRegistration component */
</style>