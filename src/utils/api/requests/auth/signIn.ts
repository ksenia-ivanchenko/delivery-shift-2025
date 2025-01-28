import { setCookie } from 'cookies';
import { api } from 'api';
import { LoginData, SignInResponse } from './types';

export const signInApi = async (data: LoginData) => {
  const response = await api.post<SignInResponse>('/users/signin', data);
  if (response.data.success) {
    setCookie('accessToken', response.data.token);
  }
  return response;
};
