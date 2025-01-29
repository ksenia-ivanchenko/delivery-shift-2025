import { api } from 'api';
import { CalculateDeliveryRequest, CalculateDeliveryResponse } from './types';

export const calculateDeliveryApi = async (params: CalculateDeliveryRequest) =>
  await api.post<CalculateDeliveryResponse>('/delivery/calc', params);
