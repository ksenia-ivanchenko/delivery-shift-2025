import { api } from '../../instance';
import { TGetOrdersResponse } from './types';

export const getOrders = async (): Promise<TGetOrdersResponse> => {
  const response = await api.get<TGetOrdersResponse>('/delivery/orders');
  return response.data;
};
