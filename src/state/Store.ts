import { configureStore } from '@reduxjs/toolkit';
import toDosReducer from './todos/ToDos';

// Store is the entire state of the application
export const store = configureStore({
  reducer: {
    toDos: toDosReducer,
  },
});

// RootState is the state of the entire application
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch is the dispatch function for the entire application
export type AppDispatch = typeof store.dispatch;
