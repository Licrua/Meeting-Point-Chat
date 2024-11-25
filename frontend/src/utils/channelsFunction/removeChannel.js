import { errorOnRequest } from '@utils/toast/notify';
import axios from 'axios';

async function removeChannel(id, token) {
  try {
    const request = await axios.delete(`/api/v1/channels/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return request;
  } catch (error) {
    console.error('Error removing channel:', error);
    errorOnRequest();
    throw error;
  }
}

export default removeChannel;
