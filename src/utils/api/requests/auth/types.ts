export type LoginData = {
  phone: string;
  code: number;
};

export type User = {
  phone: string;
  firstname?: string;
  middlename?: string;
  lastname?: string;
  email?: string;
  city?: string;
};

export type SignInResponse = {
  success: boolean;
  user: User;
  token: string;
  reason?: string;
};

export type CreateOtpData = {
  phone: string;
};

export type CreateOtpResponse = {
  success: boolean;
  reason: boolean;
  retryDelay: number;
};

export type GetUserSessionResponse = {
  success: boolean;
  user: User;
  reason?: string;
};

export type UpdateUserDataRequest = {
  profile: Omit<User, 'phone'>;
  phone: string;
};

export type UpdateUserDataResponse = {
  success: boolean;
  reason?: string;
  user: User;
};
