import { api } from 'api';
import { UpdateUserDataRequest, UpdateUserDataResponse } from './types';

export const updateUserDataApi = async (params: UpdateUserDataRequest) => {
  const res = await api.patch<UpdateUserDataResponse>('/users/profile', params);
  return { res, params };
};
