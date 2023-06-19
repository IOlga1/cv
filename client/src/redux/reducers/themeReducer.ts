import { createSlice } from '@reduxjs/toolkit';

const themeReducer = createSlice({
  name: 'themeMode',
  initialState: {
    theme: 'light'
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    }
  }
});

export default themeReducer.reducer;
export const { setTheme } = themeReducer.actions;
