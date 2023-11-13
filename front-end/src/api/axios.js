import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL, // Retrieving URLs from an .env file
  timeout: 5000, // Request timeout in milliseconds
});

export { axiosInstance };
