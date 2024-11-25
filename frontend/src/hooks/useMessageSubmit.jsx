import { errorOnRequest } from '@utils/toast/notify';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import axios from 'axios';
import leoProfanity from 'leo-profanity';

const useMessageSubmit = () => {
  const currentChannelId = useSelector(
    (state) => state.channels?.currentChannelId,
  );
  const onSubmitLogic = async (values, { setSubmitting, resetForm }) => {
    const users = JSON.parse(localStorage.getItem('username')) || [];
    const newMessage = {
      id: _.uniqueId(),
      value: leoProfanity.clean(values.message),
      channelId: currentChannelId,
      username: users[users.length - 1].name,
    };

    try {
      await axios.post('/api/v1/messages', newMessage, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    } catch (error) {
      errorOnRequest();
      console.error('Failed to send message:', error);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return { onSubmitLogic };
};

export default useMessageSubmit;
