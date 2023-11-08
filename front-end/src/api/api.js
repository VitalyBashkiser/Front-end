import instance from 'axios';

async function checkHealth() {
  try {
    const { data } = await instance.get('health_check/');
    console.log('Health Check Response:', data);
    return data;
  } catch (error) {
    console.error('Error checking health:', error);
    throw error;
  }
}

export { checkHealth };

