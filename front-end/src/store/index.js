import { createStore } from 'vuex';

export default createStore({
  state: {
    testString: 'Hello, Vuex!',
    user: null, // Add a property to store user data
  },
  getters: {
    getTestString: state => state.testString,
    getUser: state => state.user, // Getter for user data retrieval
  },
  actions: {
    updateTestString: ({ commit }, newString) => {
      commit('setTestString', newString);
    },
  },
  mutations: {
    setTestString: (state, newString) => {
      state.testString = newString;
    },
    setUser: (state, user) => {
      state.user = user;
    },
  },
});