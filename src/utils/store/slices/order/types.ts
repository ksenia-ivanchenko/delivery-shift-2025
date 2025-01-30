import { Address, DeliveryOption, Point, User } from 'api';

export type OrderState = {
  senderPoint: Point;
  sender: User;
  senderAddress: Address;
  receiverPoint: Point;
  receiver: User;
  receiverAddress: Address;
  payer: 'RECEIVER';
  option: DeliveryOption;
  loading: boolean;
  requestError: null | string;
};
