import { api } from 'api';
import { PostOrderRequest, PostOrderResponse } from './types';

export const postOrder = async (params: PostOrderRequest) => {
  const response = await api.post<PostOrderResponse>('/delivery/order', params);
  return response;
};
