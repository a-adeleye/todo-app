import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserData';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
