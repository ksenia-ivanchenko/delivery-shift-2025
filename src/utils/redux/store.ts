import { configureStore } from '@reduxjs/toolkit';

import { prefix as deliveryPrefix, deliveryReducer } from './delivery/slice';

export const store = configureStore({
  reducer: { [deliveryPrefix]: deliveryReducer }
});
