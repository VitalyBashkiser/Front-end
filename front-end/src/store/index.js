import { createStore } from 'vuex';
import { getUsers } from '@/services/userService';
import usersModule from './users';
import companiesModule from './companies';

export default createStore({
  modules: {
    users: usersModule,
    companies: companiesModule,
  },
  state: {
    testString: 'Hello, Vuex!',
    user: null,
    users: [],
  },
  getters: {
    getTestString: state => state.testString,
    getUser: state => state.user,
    getUsers: state => state.users,
  },
  actions: {
    updateTestString: ({ commit }, newString) => {
      commit('SET_TEST_STRING', newString);
    },
    async fetchUsers({ commit }) {
      try {
        const users = await getUsers();
        commit('SET_USERS', users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
  },
  mutations: {
    setTestString: (state, newString) => {
      state.testString = newString;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
  },
});

