import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from 'counter/slices/counterSlice';
import exempleReducer from 'example/slices/exempleSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    exemple: exempleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
