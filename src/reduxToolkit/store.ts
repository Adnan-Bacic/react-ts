import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import { uiReducer } from './ui/uiReducer';

export const reduxToolkitStore = configureStore({
  reducer: {
    counter: counterReducer,
    ui: uiReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reduxToolkitStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxToolkitStore.dispatch;
