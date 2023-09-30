<template>
  <div>
    <input v-model="email" @blur="validateEmail" placeholder="Email" />
    <span v-if="emailError">{{ emailError }}</span>

    <input v-model="password" placeholder="Password" type="password" />
    <input v-model="confirmPassword" @blur="validatePassword" placeholder="Confirm Password" type="password" />
    <span v-if="passwordError">{{ passwordError }}</span>

    <button @click="register">Register</button>
  </div>
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
      if (!this.email.includes('@')) {
        this.emailError = 'Invalid email address';
      } else {
        this.emailError = '';
      }
    },
    validatePassword() {
      if (this.password !== this.confirmPassword) {
        this.passwordError = 'Passwords do not match';
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