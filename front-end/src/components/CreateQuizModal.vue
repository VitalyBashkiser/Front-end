<template>
  <div class="modal">
    <form @submit.prevent="createQuiz">
      <label for="title">{{ $t('quiz.title') }}:</label>
      <input type="text" id="title" v-model="title" required>

      <label for="description">{{ $t('quiz.description') }}:</label>
      <textarea id="description" v-model="description" required></textarea>

      <label for="frequency">{{ $t('quiz.frequency') }} (in days):</label>
      <input type="number" id="frequency" v-model="frequency" required>

      //Logic for adding questions and answers

      <button type="button" @click="addQuestion">{{ $t('quiz.addQuestion') }}</button>
      <button type="submit">{{ $t('quiz.createQuiz') }}</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'; // Import axios for making HTTP requests

export default {
  data() {
    return {
      title: '',
      description: '',
      frequency: 0,
      questions: [
        { question: '', answers: [{ text: '', isCorrect: false }] }
      ]
    };
  },
  methods: {
    addQuestion() {
      this.questions.push({ question: '', answers: [{ text: '', isCorrect: false }] });
    },
    createQuiz() {
      const quizData = {
        title: this.title,
        description: this.description,
        frequency: this.frequency,
        questions: this.questions
      };

      axios.post('/api/quizzes/', quizData) // Assuming this endpoint creates a new quiz
        .then(response => {
          // Reset form fields after successful creation
          this.title = '';
          this.description = '';
          this.frequency = 0;
          this.questions = [{ question: '', answers: [{ text: '', isCorrect: false }] }];
        })
        .catch(error => {
          console.error('Error creating quiz', error);
        });
    }
  }
};
</script>
