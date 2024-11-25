import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const messagesAdapter = createEntityAdapter();

const initialState = {
  currentMessages: {},
  currentChannelId: null,
  currentChannel: null,
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const { channelId, message } = action.payload;
      if (!state.currentMessages[channelId]) {
        state.currentMessages[channelId] = messagesAdapter.getInitialState();
      }

      state.currentMessages[channelId] = messagesAdapter.addOne(
        state.currentMessages[channelId],
        message,
      );
    },
    removeMessagesByChannelId: (state, action) => {
      const { channelId } = action.payload;
      delete state.currentMessages[channelId];
    },
  },
});

export const { addMessage, removeMessagesByChannelId } = messagesSlice.actions;

export default messagesSlice.reducer;

// Селекторы для сообщений
export const { selectAll: selectAllMessages, selectById: selectMessageById } =
  messagesAdapter.getSelectors((state) => state.messages);

// Селектор для получения сообщений по ID канала
export const selectMessagesByChannelId = (state, channelId) => {
  const channelMessages = state.messages?.currentMessages[channelId];
  return channelMessages
    ? messagesAdapter.getSelectors().selectAll(channelMessages)
    : [];
};
