import { api } from 'api';
import { CancelDeliveryResponse } from './types';

export const cancelDelivery = async (orderId: string) =>
  await api.put<CancelDeliveryResponse>('/delivery/orders/cancel', {
    orderId: orderId
  });
