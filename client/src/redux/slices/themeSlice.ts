import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeOptions } from '../../constants/theme';

interface IInitialState {
  theme: ThemeOptions;
}

const initialState: IInitialState = {
  theme: ThemeOptions.white
};

const themeSlice = createSlice({
  name: 'themeMode',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeOptions>) {
      state.theme = action.payload;
    }
  }
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
