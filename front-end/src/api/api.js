import { axiosInstance } from 'axios';

async function checkHealth() {
  try {
    const response = await axiosInstance.get('/health');
    console.log('Health Check Response:', response);
    const { data } = await axiosInstance.get('health_check/');
    console.log('Health Check Response:', data);
    return data;
  } catch (error) {
    console.error('Error checking health:', error);
    throw error;
  }
}

export { checkHealth };

