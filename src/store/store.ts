import { configureStore } from '@reduxjs/toolkit';
import premieresReducer from './premieres';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    premieres: premieresReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
