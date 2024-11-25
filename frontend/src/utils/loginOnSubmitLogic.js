import axios from 'axios';
import { errorOnRequest } from './toast/notify';

async function loginOnSubmitLogic(values) {
  try {
    await axios.post('/api/v1/login', {
      username: values?.username,
      password: values?.password,
    });
  } catch (error) {
    console.error('Login request failed:', error);
    errorOnRequest();
  }
}

export default loginOnSubmitLogic;
