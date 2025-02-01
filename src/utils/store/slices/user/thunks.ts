import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getOrdersApi,
  GetOrdersResponse,
  getUserSession,
  LoginData,
  signInApi,
  updateUserDataApi,
  UpdateUserDataRequest,
  UpdateUserDataResponse
} from 'api';
import { deleteCookie, getCookie } from 'cookies';

export const signIn = createAsyncThunk(
  'user/signIn',
  async ({ phone, code }: LoginData, { rejectWithValue }) => {
    try {
      const response = await signInApi({ phone, code });
      return response.data;
    } catch (error) {
      const errorMessage = error.response.data.message || 'Что-то пошло не так. Попробуйте позже.';
      return rejectWithValue(errorMessage);
    }
  }
);

export const checkUserAuth = createAsyncThunk('user/checkAuth', async (_, { rejectWithValue }) => {
  try {
    if (getCookie('accessToken')) {
      const res = await getUserSession();
      return res.data.user;
    }
  } catch (error) {
    deleteCookie('accessToken');
    return rejectWithValue(error.message);
  }
});

export const getOrders = createAsyncThunk<
  GetOrdersResponse,
  void,
  { rejectValue: { reason: string } }
>('user/orders', async (_, { rejectWithValue }) => {
  try {
    const response = await getOrdersApi();
    return response.data;
  } catch (error) {
    return rejectWithValue({
      reason: error?.response?.data?.reason || 'Неизвестная ошибка'
    });
  }
});

export const updateUserData = createAsyncThunk<
  UpdateUserDataResponse,
  UpdateUserDataRequest,
  { rejectValue: { reason: string } }
>('user/update', async (userData: UpdateUserDataRequest, { rejectWithValue }) => {
  try {
    const response = await updateUserDataApi(userData);
    return {
      ...response.res.data,
      user: { ...response.params.profile, phone: response.params.phone }
    };
  } catch (error) {
    return rejectWithValue({
      reason: error?.response?.data?.reason || 'Неизвестная ошибка'
    });
  }
});
