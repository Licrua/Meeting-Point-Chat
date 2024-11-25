import { errorOnRequest } from '@utils/toast/notify';
import axios from 'axios';

async function newUser(login, pass) {
  try {
    const request = await axios.post('/api/v1/signup', {
      username: login,
      password: pass,
    });
    const user = {
      id: Date.now(),
      username: request.data.username,
    };

    const existingUsers = localStorage.getItem('username') || [];

    // Добавляем нового пользователя в массив
    const updatedUsers = [...existingUsers, user];

    // Сохраняем обновленный массив пользователей в localStorage
    localStorage.setItem('username', JSON.stringify(updatedUsers));
    localStorage.setItem('token', request.data.token);

    return request.data; // Возвращаем данные из ответа, если запрос выполнен успешно
  } catch (error) {
    if (error.response && error.response.status === 409) {
      errorOnRequest();
    }
    throw error;
  }
}

export default newUser;
