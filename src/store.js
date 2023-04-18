import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    clickCount: 0,
    disable: false,
  },
  reducers: {
    incrementClickCount: (state) => {
      state.clickCount += 1;
    },
    clearClickCount: (state) => {
      state.clickCount = 0;
    },
    toggleDisable: (state) => {
      state.disable = !state.disable;
    },
  },
});

export const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,
    },
  });



export const { incrementClickCount, clearClickCount, toggleDisable } = counterSlice.actions;
