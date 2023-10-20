import axios from 'axios';

const API_URL = 'http://your_api_url/users'; // Replace with your actual API URL

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};