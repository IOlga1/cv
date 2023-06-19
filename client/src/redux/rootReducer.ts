import { combineReducers } from '@reduxjs/toolkit';
import theme from './reducers/themeReducer';

export const rootReducer = combineReducers({
  theme,
});

export type RootState = ReturnType<typeof rootReducer>;