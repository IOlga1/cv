import { createSlice } from '@reduxjs/toolkit';
import { ThemeOptions } from '../../constants/theme';

const themeSlice = createSlice({
  name: 'themeMode',
  initialState: {
    theme: ThemeOptions.white
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    }
  }
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
