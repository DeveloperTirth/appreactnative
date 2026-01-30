import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import todoReducer from "./slices/todoSlice";


export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
