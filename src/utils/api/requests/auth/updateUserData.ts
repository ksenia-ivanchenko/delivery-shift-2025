import { api } from '../../instance';
import { UpdateUserDataRequest, UpdateUserDataResponse } from './types';

export const updateUserData = async (params: UpdateUserDataRequest) =>
  await api.patch<UpdateUserDataResponse>('/users/profile', params);
