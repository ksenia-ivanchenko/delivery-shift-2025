import { api } from '../../instance';
import { TGetOrderResponse } from './types';

export const getOrder = async (orderId: string): Promise<TGetOrderResponse> => {
  const response = await api.get<TGetOrderResponse>(`/delivery/orders/${orderId}`);
  return response.data;
};
