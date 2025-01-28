import { api } from '../../instance';
import { CalculateDeliveryRequest, CalculateDeliveryResponse } from './types';

export const calculateDelivery = async (params: CalculateDeliveryRequest) =>
  await api.post<CalculateDeliveryResponse>('/delivery/calc', params);
