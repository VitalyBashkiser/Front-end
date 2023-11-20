<template>
  <div>
    <select v-model="selectedLanguage" @change="changeLanguage">
        <option value="en">{{ $t('english') }}</option>
        <option value="uk">{{ $t('ukrainian') }}</option>
    </select>

    <h1>{{ $t('companyQuizzes') }}</h1>
    <button @click="openCreateQuizModal">{{ $t('createQuiz') }}</button>
    <ul>
      <li v-for="quiz in quizzes" :key="quiz.id">
        <h3>{{ quiz.title }}</h3>
        <p>{{ quiz.description }}</p>
      </li>
    </ul>
    <CreateQuizModal v-if="showCreateQuizModal" @close="closeCreateQuizModal" />
  </div>
</template>

<script>
import CreateQuizModal from './CreateQuizModal.vue';
import axios from 'axios';

export default {
  data() {
    return {
      selectedLanguage: this.$i18n.locale,
      showCreateQuizModal: false,
      quizzes: []
    };
  },
  components: {
    CreateQuizModal
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage;
    },
    openCreateQuizModal() {
      this.showCreateQuizModal = true;
    },
    closeCreateQuizModal() {
      this.showCreateQuizModal = false;
    },
    fetchQuizzes() {
      axios.get('/api/quizzes/')
        .then(response => {
          this.quizzes = response.data;
        })
        .catch(error => {
          console.error('Error fetching quizzes', error);
        });
    }
  },
  mounted() {
    this.fetchQuizzes();
  }
};
</script>
