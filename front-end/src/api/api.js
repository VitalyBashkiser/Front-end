import instance from './axios';

async function checkHealth() {
  try {
    const response = await instance.get('/health');
    console.log('Health Check Response:', response);
  } catch (error) {
    console.error('Error checking health:', error);
  }
}

export { checkHealth };
