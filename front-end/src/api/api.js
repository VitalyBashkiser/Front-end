import axios from './axios';

const instance = axios.create({
  baseURL: 'http://192.168.10.47:8080',
});

async function checkHealth() {
  try {
    const response = await instance.get('/health');
    console.log('Health Check Response:', response);
  } catch (error) {
    console.error('Error checking health:', error);
  }
}

export { checkHealth };