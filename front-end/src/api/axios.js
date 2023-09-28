import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.10.47:8080',
  timeout: 5000, // Request timeout in milliseconds
});

export default instance;