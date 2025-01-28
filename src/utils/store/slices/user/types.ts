import { User } from 'api';

export type UserState = {
  user: User;
  loading: boolean;
  requestError: null | string;
  authorized: boolean;
};
