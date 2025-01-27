import { api } from '../instance';

export const getDeliveryPoints = () => {
  return api.get('/delivery/points');
};