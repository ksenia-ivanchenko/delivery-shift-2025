import { api } from 'api';
import { GetDeliveryPointsResponse } from './types';

export const getDeliveryPoints = async () =>
  await api.get<GetDeliveryPointsResponse>('/delivery/points');
