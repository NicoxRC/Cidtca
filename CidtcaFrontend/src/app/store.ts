import formReducer from '../slices/formSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { form: formReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
