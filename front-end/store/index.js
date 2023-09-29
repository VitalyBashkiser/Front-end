import { createStore } from 'vuex';

export default createStore({
  state: {
    testString: 'Hello, Vuex!',
  },
    getters: {
    getTestString: (state) => state.testString,
  },
    actions: {
    updateTestString: ({ commit }, newString) => {
      commit('setTestString', newString);
  },
  mutations: {
    setTestString: (state, newString) => {
      state.testString = newString;
    },
  },
});


