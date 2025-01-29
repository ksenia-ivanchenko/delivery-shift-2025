import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  calculateDeliveryApi,
  CalculateDeliveryRequest,
  CalculateDeliveryResponse,
  getDeliveryPointsApi,
  GetDeliveryPointsResponse,
  getPackageTypesApi,
  GetPackageTypesResponse
} from 'api';

export const getDeliveryPoints = createAsyncThunk<
  GetDeliveryPointsResponse,
  void,
  { rejectValue: { reason: string } }
>('delivery/points', async (_, { rejectWithValue }) => {
  try {
    const response = await getDeliveryPointsApi();
    return response.data;
  } catch (error) {
    return rejectWithValue({
      reason: error?.response?.data?.reason || 'Неизвестная ошибка'
    });
  }
});

export const getPackageTypes = createAsyncThunk<GetPackageTypesResponse, void, { rejectValue }>(
  'delivery/packageTypes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPackageTypesApi();
      return response.data;
    } catch (error) {
      return rejectWithValue({
        reason: error?.response?.data?.reason || 'Неизвестная ошибка'
      });
    }
  }
);

export const calculateDelivery = createAsyncThunk<
  CalculateDeliveryResponse,
  CalculateDeliveryRequest,
  { rejectValue: { reason: string } }
>('order/deliveryType', async (params: CalculateDeliveryRequest, { rejectWithValue }) => {
  try {
    const response = await calculateDeliveryApi(params);
    return response.data;
  } catch (error) {
    return rejectWithValue({
      reason: error?.response?.data?.reason || 'Неизвестная ошибка'
    });
  }
});
