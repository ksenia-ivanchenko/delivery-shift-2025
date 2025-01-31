import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  cancelDelivery,
  CancelDeliveryResponse,
  getOrderApi,
  GetOrderResponse,
  postOrder,
  PostOrderRequest,
  PostOrderResponse
} from 'api';

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

// export const cancelOrder = createAsyncThunk<
//   CancelDeliveryResponse,
//   string,
//   { rejectValue: { reason: string } }
// >('order/cancel', async (orderId, { rejectWithValue }) => {
//   try {
//     const response = await cancelDelivery(orderId);
//     return response.data;
//   } catch (error) {
//     return rejectWithValue({
//       reason: error?.response?.data?.reason || 'Неизвестная ошибка'
//     });
//   }
// });
