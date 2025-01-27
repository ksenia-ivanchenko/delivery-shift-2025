import { api } from '../../instance';
import { TGetDeliveryPointsResponse } from './types';

export const getDeliveryPoints = async (): Promise<TGetDeliveryPointsResponse> => {
  const response = await api.get<TGetDeliveryPointsResponse>('/delivery/points');
  return response.data;
};
