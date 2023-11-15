import axios from 'axios';

const API_URL = '/api/users/';

async function getUserById(userId) {
  try {
    const response = await axios.get(`${API_URL}${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error getting user by ID:', error);
    throw error;
  }
}

async function updateUser(userData) {
  try {
    const response = await axios.put(`${API_URL}${userData.id}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

async function deleteUserById(userId) {
  try {
    await axios.delete(`${API_URL}${userId}`);
  } catch (error) {
    console.error('Error deleting user by ID:', error);
    throw error;
  }
}

async function deleteUserProfile(userId) {
  try {
    await axios.delete(`${API_URL}profile/${userId}`);
  } catch (error) {
    console.error('Error deleting user profile:', error);
    throw error;
  }
}

export { getUserById, updateUser, deleteUserById, deleteUserProfile };
