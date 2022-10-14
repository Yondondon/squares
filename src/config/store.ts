import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import squareSlice from '../features/Square/reducer';

export const store = configureStore({
  reducer: {
    square: squareSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
