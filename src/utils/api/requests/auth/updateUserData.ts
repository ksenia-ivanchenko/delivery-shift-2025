import { api } from 'api';
import { UpdateUserDataRequest, UpdateUserDataResponse } from './types';

export const updateUserDataApi = async (params: UpdateUserDataRequest) =>
  await api.patch<UpdateUserDataResponse>('/users/profile', params);
