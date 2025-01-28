import { api } from '../../instance';
import { GetUserSessionResponse } from './types';

export const getUserSession = async () => await api.get<GetUserSessionResponse>('/users/session');
