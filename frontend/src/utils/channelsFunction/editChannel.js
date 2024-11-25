import { errorOnRequest } from '@utils/toast/notify';
import axios from 'axios';
import leoProfanity from 'leo-profanity';

export async function editChannel(id, token, value) {
  try {
    const editedChannel = { name: leoProfanity.clean(value) };

    await axios.patch(`/api/v1/channels/${id}`, editedChannel, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    errorOnRequest();
    console.error('Error editing channel:', error);
    throw error;
  }
}

export default editChannel;
