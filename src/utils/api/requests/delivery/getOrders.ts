import { api } from '../../instance';
import { GetOrdersResponse } from './types';

export const getOrders = async () => await api.get<GetOrdersResponse>('/delivery/orders');
