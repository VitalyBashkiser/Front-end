<template>
  <div>
    //Dropdown to change language
    <select v-model="selectedLanguage" @change="changeLanguage">
      <option value="en">English</option>
      <option value="uk">Ukrainian</option>
    </select>

    <h1>Company Quizzes</h1>
    <button @click="openCreateQuizModal">Create Quiz</button>
    //List of available quizzes
    <ul>
      <li v-for="quiz in quizzes" :key="quiz.id">
        <h3>{{ quiz.title }}</h3>
        <p>{{ quiz.description }}</p>
        //Display other quiz details
      </li>
    </ul>
    //Include the CreateQuizModal component
    <CreateQuizModal v-if="showCreateQuizModal" @close="closeCreateQuizModal" />
  </div>
</template>

<script>
import CreateQuizModal from './CreateQuizModal.vue'; // Import the CreateQuizModal component
import axios from 'axios'; // Import axios for making HTTP requests

export default {
  data() {
    return {
      selectedLanguage: this.$i18n.locale,
      showCreateQuizModal: false,
      quizzes: [] // Fetch quizzes data from backend and populate this array
    };
  },
  components: {
    CreateQuizModal // Register the CreateQuizModal component
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage; // Change the language based on selection
    },
    openCreateQuizModal() {
      this.showCreateQuizModal = true;
    },
    closeCreateQuizModal() {
      this.showCreateQuizModal = false;
    },
    // Fetch quizzes data from backend API
    // This method can be triggered on component mount or whenever needed
    fetchQuizzes() {
      axios.get('/api/quizzes/') // Assuming this endpoint returns the list of quizzes
        .then(response => {
          this.quizzes = response.data;
        })
        .catch(error => {
          console.error('Error fetching quizzes', error);
        });
    }
  },
  mounted() {
    this.fetchQuizzes(); // Fetch quizzes data on component mount
  }
};
</script>
