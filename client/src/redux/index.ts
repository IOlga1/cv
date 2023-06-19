import { combineReducers, configureStore } from '@reduxjs/toolkit';
import theme from './reducers/themeReducer';

export const rootReducer = combineReducers({
  theme,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer
});
