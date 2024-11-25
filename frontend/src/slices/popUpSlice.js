import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toggleId: null,
  removeToggler: false,
  renameToggler: false,
  currentId: null,
  addToggler: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setToggleId(state, action) {
      state.toggleId =
        state.toggleId === action.payload ? null : action.payload;
    },
    setRemoveToggler(state, action) {
      state.removeToggler = action.payload;
    },

    setRenameToggler(state, action) {
      state.renameToggler = action.payload;
    },
    setCurrentId(state, action) {
      state.currentId = action.payload;
    },
    setAddToggler(state, action) {
      state.addToggler = action.payload;
    },
  },
});

export const {
  setToggleId,
  setRemoveToggler,
  setRenameToggler,
  setCurrentId,
  setAddToggler,
} = popupSlice.actions;

export default popupSlice.reducer;
