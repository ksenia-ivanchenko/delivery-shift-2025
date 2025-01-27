import { api } from '../../instance';
import { TCancelDeliveryResponse } from './types';

export const cancelDelivery = async (orderId: string): Promise<TCancelDeliveryResponse> => {
  const response = await api.put<TCancelDeliveryResponse>('/delivery/orders/cancel', {
    orderId: orderId
  });
  return response.data;
};
