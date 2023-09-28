import { createStore } from 'vuex';

export default createStore({
  state: {
    testString: 'Hello, Vuex!',
  },
  getters: {
    getTestString: state => state.testString,
  },
  mutations: {
    setTestString: (state, newString) => {
      state.testString = newString;
    },
  },
  actions: {
    updateTestString: ({ commit }, newString) => {
      commit('setTestString', newString);
    },
  },
});

