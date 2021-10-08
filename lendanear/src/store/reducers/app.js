import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  token: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { actions, name } = appSlice;
