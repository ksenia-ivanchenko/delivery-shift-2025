import { createSlice } from '@reduxjs/toolkit';
import { TDeliveryState } from './types';

const initialState: TDeliveryState = {};

export const prefix = 'delivery';

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
});

export const deliveryReducer = deliverySlice.reducer;
