import { api } from '../../instance';
import { GetDeliveryPointsResponse } from './types';

export const getDeliveryPoints = async () =>
  await api.get<GetDeliveryPointsResponse>('/delivery/points');
