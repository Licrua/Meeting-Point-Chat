import { errorOnRequest } from '@utils/toast/notify';
import axios from 'axios';

async function getChannel(token) {
  try {
    const request = await axios.get('/api/v1/channels', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await request.data;
    localStorage.setItem('channels', JSON.stringify(data));
    return request.data;
  } catch (error) {
    console.error('Error getting channels:', error);
    errorOnRequest();
    throw error;
  }
}

export default getChannel;
