import { createSlice } from '@reduxjs/toolkit';

import { DeliveryState } from './types';
import { calculateDelivery, getDeliveryPoints, getPackageTypes } from './thunks';

const initialState: DeliveryState = {
  points: [],
  packageTypes: [],
  deliveryOptions: [],
  loading: false,
  requestError: null
};

export const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDeliveryPoints.pending, (state) => {
        state.loading = true;
        state.requestError = null;
      })
      .addCase(getDeliveryPoints.rejected, (state, action) => {
        state.loading = false;
        state.requestError = action.payload?.reason || action.error.message || 'Ошибка запроса';
        state.points = [];
      })
      .addCase(getDeliveryPoints.fulfilled, (state, action) => {
        state.loading = false;
        state.points = action.payload.points;
      });
    builder
      .addCase(getPackageTypes.pending, (state) => {
        state.loading = true;
        state.requestError = null;
      })
      .addCase(getPackageTypes.rejected, (state, action) => {
        state.loading = false;
        state.requestError = action.payload?.reason || action.error.message || 'Ошибка запроса';
        state.points = [];
      })
      .addCase(getPackageTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.packageTypes = action.payload.packages;
      });
    builder
      .addCase(calculateDelivery.pending, (state) => {
        state.loading = true;
        state.requestError = null;
      })
      .addCase(calculateDelivery.rejected, (state, action) => {
        state.loading = false;
        state.requestError = action.payload?.reason || action.error.message || 'Ошибка запроса';
      })
      .addCase(calculateDelivery.fulfilled, (state, action) => {
        state.loading = false;
        state.deliveryOptions = action.payload.options;
      });
  }
});

export const deliveryReducer = deliverySlice.reducer;
