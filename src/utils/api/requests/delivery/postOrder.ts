import { api } from '../../instance';
import { TPostOrderRequest, TPostOrderResponse } from './types';

export const postOrder = async (params: TPostOrderRequest): Promise<TPostOrderResponse> => {
  const response = await api.post<TPostOrderResponse>('/delivery/order', params);
  return response.data;
};
