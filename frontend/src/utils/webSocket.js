import io from 'socket.io-client';

const socket = io();

socket.on('connect', () => {
  ('Connected to server');

  socket.on('removeChannel', (payload) => {
    console.log('removeChannelSocket', payload);
  });
  socket.on('renameChannel', (payload) => {
    console.log('renameChannelSocket', payload);
  });
});

socket.on('disconnect', () => {
  ('Disconnected from server');
});

export default socket;
