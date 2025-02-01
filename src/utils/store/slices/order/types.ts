import { Address, DeliveryOption, Payers, Point, Person } from 'api';

export type OrderState = {
  senderPoint: Point;
  sender: Person & { city: string };
  senderAddress: Address;
  receiverPoint: Point;
  receiver: Person & { city: string };
  receiverAddress: Address;
  payer: Payers;
  option: DeliveryOption;
  loading: boolean;
  requestError: null | string;
  status: null | 0 | 1 | 2 | 3 | 4;
  cancellable: boolean;
  _id: string;
};
