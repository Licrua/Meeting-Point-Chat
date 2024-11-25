import { configureStore } from '@reduxjs/toolkit';
import channelsSlice from '@slices/channelsSlice';
import messagesSlice from '@slices/messagesSlice';
import popUpSlice from '@slices/popUpSlice';
import usersSlice from '@slices/usersSlice';

const store = configureStore({
  reducer: {
    channels: channelsSlice,
    popUp: popUpSlice,
    users: usersSlice,
    messages: messagesSlice,
  },
});

export default store;
