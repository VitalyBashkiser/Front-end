import { getUserById } from '@/services/userService';

const state = {
  selectedUser: null,
  currentPage: 1, // СurrentPage initialization
};

const getters = {
  getSelectedUser: state => state.selectedUser,
};

const actions = {
  async fetchUserById({ commit }, userId) {
    try {
      const user = await getUserById(userId);
      commit('SET_SELECTED_USER', user);
    } catch (error) {
      console.error('Error fetching user by ID:', error);
    }
  },

  async updateUserInformation({ commit }, userData) {
    try {
      const updatedUser = await updateUser(userData);
      commit('SET_SELECTED_USER', updatedUser);
    } catch (error) {
      console.error('Error updating user information:', error);
    }
  },

  async deleteUserById({ commit }, userId) {
    try {
      await deleteUserById(userId);
      commit('SET_SELECTED_USER', null); // Clear selected user after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  },

  async deleteUserProfile({ commit }, userId) {
    try {
      await deleteUserProfile(userId);
      commit('SET_SELECTED_USER', null); // Clear selected user after deletion
    } catch (error) {
      console.error('Error deleting user profile:', error);
    }
  },

    // Implement pagination component to get all users
    changePage({ commit }, newPage) {
        commit('SET_CURRENT_PAGE', newPage);
    },
};

const mutations = {
    SET_SELECTED_USER: (state, user) => {
      state.selectedUser = user;
    },
  
    // Pagination: Set current page
    SET_CURRENT_PAGE: (state, newPage) => {
      state.currentPage = newPage;
    },
  };

export default {
  state,
  getters,
  actions,
  mutations,
};
