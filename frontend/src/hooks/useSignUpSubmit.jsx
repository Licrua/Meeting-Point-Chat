import { errorOnRequest } from '@utils/toast/notify';
import { addUser, selectAllUsers } from '@slices/usersSlice';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useSignUpSubmit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(selectAllUsers);

  const onSubmitLogic = async (values, { setSubmitting }) => {
    try {
      const request = await axios.post('/api/v1/signup', {
        username: values.username,
        password: values.password,
      });

      const { token, username } = request.data;
      const newUser = { id: _.uniqueId(), name: username };
      dispatch(addUser(newUser));
      const updatedUsers = [...users, newUser];
      localStorage.setItem('username', JSON.stringify(updatedUsers));
      localStorage.setItem('token', token);

      navigate('/login');
    } catch (error) {
      errorOnRequest();
      console.error('Error during sign-up', error);
    } finally {
      setSubmitting(false);
    }
  };

  return { onSubmitLogic };
};

export default useSignUpSubmit;
