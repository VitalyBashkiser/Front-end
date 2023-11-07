import instance from './axios';

async function checkHealth() {
  try {
    const response = await instance.get('/health_check/');
    console.log('Health Check Response:', response);
    return response.data;
  } catch (error) {
    console.error('Error checking health:', error);
    throw error;
  }
}

export { checkHealth };
