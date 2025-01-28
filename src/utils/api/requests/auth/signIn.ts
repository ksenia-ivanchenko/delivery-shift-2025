import { setCookie } from '../../../cookie';
import { api } from '../../instance';
import { LoginData, SignInResponse } from './types';

export const signIn = async (data: LoginData) => {
  const response = await api.post<SignInResponse>('/users/signin', data);
  if (response.data.success) {
    setCookie('accessToken', response.data.token);
  }
  return response;
};
