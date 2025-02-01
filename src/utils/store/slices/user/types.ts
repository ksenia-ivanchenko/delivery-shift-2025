import { OrderResponse, User } from 'api';

export type UserState = {
  user: User;
  orders: OrderResponse[];
  loading: boolean;
  requestError: null | string;
  authorized: boolean;
};
