import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const channelsAdapter = createEntityAdapter();

const initialState = channelsAdapter.getInitialState({
  currentChannelId: null,
  currentChannel: null,
  channelsName: [],
});

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    addChannel: channelsAdapter.addOne,
    addChannels: channelsAdapter.addMany,
    removeChannel: channelsAdapter.removeOne,
    editChannel: channelsAdapter.updateOne,
    getChannelsName: (state, action) => {
      state.channelsName.push(action.payload);
    },
    setCurrentChannel: (state, action) => {
      state.currentChannel = action.payload;
    },
    setCurrentChannelId: (state, action) => {
      state.currentChannelId = action.payload;
    },
  },
});

export const {
  addChannel,
  addChannels,
  removeChannel,
  editChannel,
  getChannelsName,
  setCurrentChannel,
  setCurrentChannelId,
} = channelsSlice.actions;

export default channelsSlice.reducer;

// Селекторы для каналов
export const { selectAll: selectAllChannels, selectById: selectByIdChannels } =
  channelsAdapter.getSelectors((state) => state.channels);
