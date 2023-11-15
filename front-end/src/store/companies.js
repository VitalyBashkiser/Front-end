import { createCompany, getCompaniesFromBackend } from '@/services/companyService';

const state = {
  companies: [],
};

const getters = {
  getCompanies: state => state.companies,
};

const actions = {
  async loadCompanies({ commit }) {
    try {
      const companies = await getCompaniesFromBackend(); // Use the function to get companies
      commit('SET_COMPANIES', companies);
    } catch (error) {
      console.error('Error loading companies:', error);
      throw error;
    }
  },

  async createCompany({ commit }, companyData) {
    try {
      const newCompany = await createCompany(companyData);
      commit('ADD_COMPANY', newCompany);
      return newCompany;
    } catch (error) {
      console.error('Error creating company:', error);
      throw error;
    }
  },
};

const mutations = {
  ADD_COMPANY: (state, newCompany) => {
    state.companies.push(newCompany);
  },

  SET_COMPANIES: (state, companies) => { // Add mutation to set companies
    state.companies = companies;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
