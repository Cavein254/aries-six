import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { notesApi } from './api/services/notesApi';
import { userApi } from './api/services/userApi';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [notesApi.reducerPath]: notesApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({}).concat([userApi.middleware, notesApi.middleware]),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
