import { api } from 'api';
import { GetOrdersResponse } from './types';

export const getOrdersApi = async () => await api.get<GetOrdersResponse>('/delivery/orders');
