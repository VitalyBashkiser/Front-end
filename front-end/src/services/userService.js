import axios from 'axios';

const API_URL = '/api/users/';

async function getUserById(userId) {
  try {
    const response = await instance.get(`${API_URL}${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error getting user by ID:', error);
    throw error;
  }
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
