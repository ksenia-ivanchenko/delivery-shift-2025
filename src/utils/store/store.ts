import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

import { deliverySlice, orderSlice, userSlice } from './slices';

export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [deliverySlice.name]: deliverySlice.reducer,
  [orderSlice.name]: orderSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
