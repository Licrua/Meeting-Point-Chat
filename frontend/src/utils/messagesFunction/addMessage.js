import { errorOnRequest } from '@utils/toast/notify';
import axios from 'axios';

async function addMessageValue(newMessage, token) {
  try {
    const value = await axios.post('/api/v1/messages', newMessage, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return value.data;
  } catch (error) {
    errorOnRequest();
    console.error('Error adding message:', error);
    throw error;
  }
}

export default addMessageValue;
