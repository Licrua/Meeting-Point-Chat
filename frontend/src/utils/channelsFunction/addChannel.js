import { errorOnRequest } from '@utils/toast/notify';
import axios from 'axios';

async function addChannel(token, obj) {
  try {
    const request = await axios.post('/api/v1/channels', obj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return request.data;
  } catch (error) {
    errorOnRequest();
    console.error('Error adding channel:', error);
    throw error;
  }
}
export default addChannel;
