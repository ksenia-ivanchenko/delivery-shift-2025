import { api } from '../../instance';
import { TUpdateUserDataRequest, TUpdateUserDataResponse } from './types';

export const updateUserData = async (
  params: TUpdateUserDataRequest
): Promise<TUpdateUserDataResponse> => {
  const response = await api.patch<TUpdateUserDataResponse>('/users/profile', params);
  return response.data;
};
