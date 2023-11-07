import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 5000, // Request timeout in milliseconds
});

export default instance;