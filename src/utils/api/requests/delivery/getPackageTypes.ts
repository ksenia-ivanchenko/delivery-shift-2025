import { api } from 'api';
import { GetPackageTypesResponse } from './types';

export const getPackageTypesApi = async () =>
  await api.get<GetPackageTypesResponse>('/delivery/package/types');
