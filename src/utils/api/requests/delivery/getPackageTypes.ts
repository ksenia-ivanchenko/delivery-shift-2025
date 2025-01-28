import { api } from 'api';
import { GetPackageTypesResponse } from './types';

export const getPackageTypes = async () =>
  await api.get<GetPackageTypesResponse>('/delivery/package/types');
