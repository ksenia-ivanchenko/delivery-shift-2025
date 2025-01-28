import { api } from 'api';
import { GetOrdersResponse } from './types';

export const getOrders = async () => await api.get<GetOrdersResponse>('/delivery/orders');
