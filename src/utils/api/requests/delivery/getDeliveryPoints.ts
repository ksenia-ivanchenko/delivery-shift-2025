import { api } from 'api';
import { GetDeliveryPointsResponse } from './types';

export const getDeliveryPointsApi = async () =>
  await api.get<GetDeliveryPointsResponse>('/delivery/points');
