import { api } from '../../instance';
import { TGetPackageTypesResponse } from './types';

export const getPackageTypes = async (): Promise<TGetPackageTypesResponse> => {
  const response = await api.get<TGetPackageTypesResponse>('/delivery/package/types');
  return response.data;
};
