import { errorOnRequest } from '@utils/toast/notify';
import axios from 'axios';

async function loginUser(log, pass) {
  try {
    const request = await axios.post('/api/v1/login', {
      username: log,
      password: pass,
    });
    return request.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    errorOnRequest();
    throw error;
  }
}
export default loginUser;
