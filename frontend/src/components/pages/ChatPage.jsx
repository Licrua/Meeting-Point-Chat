import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Channels from '@components/channelsField/Channels';
import ChatInfo from '@components/channelsField/ChatInfo';
import MessageBox from '@components/messageField/MessageBox';
import MessageForm from '@components/messageField/MessageForm';
import {
  addChannels,
  setCurrentChannel,
  setCurrentChannelId,
} from '@slices/channelsSlice';
import { addMessage, selectMessagesByChannelId } from '@slices/messagesSlice';
import socket from '@utils/webSocket';
import { errorOnRequest } from '@utils/toast/notify';

const ChatPage = () => {
  const dispatch = useDispatch();
  const currentChannelId = useSelector(
    (state) => state.channels.currentChannelId,
  );

  const messages = useSelector((state) =>
    selectMessagesByChannelId(state, currentChannelId),
  );

  useEffect(() => {
    const handleMessage = (message) => {
      try {
        const { channelId } = message;

        dispatch(addMessage({ channelId, message }));
      } catch (e) {
        console.error(e);
        errorOnRequest();
      }
    };

    socket.on('newMessage', handleMessage);

    const getChannels = async (token) => {
      try {
        const response = await axios.get('/api/v1/channels', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(setCurrentChannel(response.data[0].name));
        dispatch(setCurrentChannelId(response.data[0].id)); // стартовый канал и стартовый id
        dispatch(addChannels(response.data));
      } catch (e) {
        errorOnRequest();
        console.error('Failed to fetch channels:', e);
      }
    };
    getChannels(localStorage.getItem('token'));
    return () => {
      socket.off('newMessage', handleMessage);
    };
  }, [dispatch]);

  return (
    <Container
      style={{ fontFamily: 'Bradley Hand, cursive' }}
      className="px-0 shadow-lg border-opacity-25 border border-2 border-dark rounded my-3 overflow-hidden bg-white"
    >
      <Row className="g-0">
        <Col className="border border-right-1" xs={6} md={4} lg={2}>
          <section>
            <Channels />
          </section>
        </Col>
        <Col xs={6} md={8} lg={10}>
          <section>
            <ChatInfo messages={messages} />
            <MessageBox messages={messages} />
            <MessageForm />
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatPage;
