import { api } from '../../instance';
import { TGetUserSessionResponse, TUser } from './types';

export const getUserSession = async (): Promise<TUser> => {
  const response = await api.get<TGetUserSessionResponse>('/users/session');
  return response.data.user;
};
