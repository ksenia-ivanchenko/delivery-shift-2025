import { api } from 'api';
import { GetOrderResponse } from './types';

export const getOrderApi = async (orderId: string) =>
  await api.get<GetOrderResponse>(`/delivery/orders/${orderId}`);
