import { api } from 'api';
import { GetOrderResponse } from './types';

export const getOrder = async (orderId: string) =>
  await api.get<GetOrderResponse>(`/delivery/orders/${orderId}`);
