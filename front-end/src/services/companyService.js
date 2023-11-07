import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/companies/';

async function getCompaniesFromBackend() {
const response = await axios.get(API_URL);
  return response.data;
}

export { getCompaniesFromBackend };