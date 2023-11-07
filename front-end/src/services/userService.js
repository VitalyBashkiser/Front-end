import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/users/';

async function getUserById(userId) {
  const response = await axios.get(`${API_URL}${userId}`);
  return response.data;
}

async function updateUser(userData) {
  const response = await axios.put(`${API_URL}${userData.id}`, userData);
  return response.data;
}

async function deleteUserById(userId) {
  await axios.delete(`${API_URL}${userId}`);
}

async function deleteUserProfile(userId) {
  await axios.delete(`${API_URL}profile/${userId}`);
}

export { getUserById, updateUser, deleteUserById, deleteUserProfile };
