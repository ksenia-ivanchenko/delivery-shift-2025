import { api } from '../../instance';
import { TCalculateDeliveryRequest, TCalculateDeliveryResponse } from './types';

export const calculateDelivery = async (
  params: TCalculateDeliveryRequest
): Promise<TCalculateDeliveryResponse> => {
  const response = await api.post<TCalculateDeliveryResponse>('/delivery/calc', params);
  return response.data;
};
