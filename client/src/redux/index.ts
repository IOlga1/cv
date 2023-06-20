import { combineReducers, configureStore } from '@reduxjs/toolkit';
import theme from './reducers/themeSlice';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  theme
});

export const store = configureStore({
  reducer: rootReducer
});
