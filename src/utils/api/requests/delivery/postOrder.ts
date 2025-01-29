import { api } from 'api';
import { PostOrderRequest, PostOrderResponse } from './types';

export const postOrder = async (params: PostOrderRequest) =>
  await api.post<PostOrderResponse>('/delivery/order', params);
