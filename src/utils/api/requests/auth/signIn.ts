import { setCookie } from '../../../cookie';
import { api } from '../../instance';
import { TLoginData, TSignInResponse } from './types';

export const signIn = async (data: TLoginData): Promise<TSignInResponse> => {
  const response = await api.post<TSignInResponse>('/users/signin', data);
  if (response.data.success) {
    setCookie('accessToken', response.data.token);
  }
  return response.data;
};
