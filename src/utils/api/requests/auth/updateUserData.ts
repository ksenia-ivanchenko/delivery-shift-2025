import { api } from 'api';
import { UpdateUserDataRequest, UpdateUserDataResponse } from './types';

export const updateUserData = async (params: UpdateUserDataRequest) =>
  await api.patch<UpdateUserDataResponse>('/users/profile', params);
