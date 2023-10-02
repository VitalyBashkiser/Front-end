<template>
  <div id="app">
    <label for="languageSelect">Select Language:</label>
    <select v-model="selectedLanguage" @change="changeLanguage" id="languageSelect">
      <option value="en">English</option>
      <option value="uk">Українська</option>
    </select>

    <img alt="Vue logo" src="@/assets/logo.png">
    <router-view />
    <InfoSomething msg="Welcome to Your Vue.js App" />

    <TestAnything />
  </div>
</template>

<script>
import InfoSomething from '@/components/InfoSomething.vue'
import TestAnything from '@/components/TestAnything.vue'

export default {
  name: 'App',
  components: {
    InfoSomething,
    TestAnything
  },
  data() {
    return {
      selectedLanguage: localStorage.getItem('selectedLanguage') || 'en'
    };
  },
  computed: {
    translatedMessage() {
      return this.$t('welcomeMsg'); // Replace 'welcomeMsg' with your translation key
    }
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage;
      localStorage.setItem('selectedLanguage', this.selectedLanguage);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
