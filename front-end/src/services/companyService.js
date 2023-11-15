import axios from 'axios';
import instance from 'axios';

const API_URL = '/api/companies/';

async function getCompaniesFromBackend() {
const response = await axios.get(API_URL);
  return response.data;
}

async function sendInvitation(email, message) {
  try {
    const response = await instance.post(`${API_URL}send_invitations/`, {
      email,
      message,
    });
    return response.data;
  } catch (error) {
    console.error('Error sending invitation:', error);
    throw error;
  }
}

export { getCompaniesFromBackend, sendInvitation };
