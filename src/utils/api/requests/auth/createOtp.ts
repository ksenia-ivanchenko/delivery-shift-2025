import { api } from '../../instance';
import { TCreateOtpData, TCreateOtpResponse } from './types';

export const createOtp = async (data: TCreateOtpData): Promise<TCreateOtpResponse> => {
  const response = await api.post<TCreateOtpResponse>('/auth/otp', data);
  return response.data;
};
