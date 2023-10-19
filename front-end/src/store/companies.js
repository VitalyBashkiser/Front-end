import { createCompany } from '@/services/companyService';

const state = {
  companies: [],
};

const getters = {
  getCompanies: state => state.companies,
};

const actions = {
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
};

// Add my company from Backend
const initialCompany = {
  id: 1,
  name: "Apple",
  description: "It's revolution, Johnny",
  is_visible: true,
  owner: 1,
};

state.companies.push(initialCompany);

export default {
  state,
  getters,
  actions,
  mutations,
};
