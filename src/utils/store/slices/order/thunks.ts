import { createAsyncThunk } from '@reduxjs/toolkit';
import { postOrder, PostOrderRequest, PostOrderResponse } from 'api';

export const createOrder = createAsyncThunk<
  PostOrderResponse,
  PostOrderRequest,
  { rejectValue: { reason: string } }
>('order/create', async (orderData: PostOrderRequest, { rejectWithValue }) => {
  try {
    const response = await postOrder(orderData);
    return response.data;
  } catch (error) {
    return rejectWithValue({
      reason: error?.response?.data?.reason || 'Неизвестная ошибка'
    });
  }
});
