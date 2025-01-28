import { api } from '../../instance';
import { CreateOtpData, CreateOtpResponse } from './types';

export const createOtp = async (data: CreateOtpData) =>
  await api.post<CreateOtpResponse>('/auth/otp', data);
