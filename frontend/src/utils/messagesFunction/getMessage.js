import { errorOnRequest } from '@utils/toast/notify';
import axios from 'axios';

async function getMessage(token) {
  try {
    const request = await axios.get('/api/v1/messages', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return request.data;
  } catch (error) {
    errorOnRequest();
    console.error('Error getting messages:', error);
    throw error;
  }
}

export default getMessage;
