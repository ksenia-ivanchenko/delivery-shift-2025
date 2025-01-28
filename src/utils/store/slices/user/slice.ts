import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './types';
import { User } from 'api';
import { checkUserAuth, signIn } from './thunks';

const initialState: UserState = {
  user: {
    phone: '',
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    city: ''
  },
  authorized: false,
  loading: false,
  requestError: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = {
        phone: '',
        firstname: '',
        middlename: '',
        lastname: '',
        email: '',
        city: ''
      };
      state.authorized = false;
      state.requestError = '';
    },
    setAuthorized: (state) => {
      state.authorized = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.requestError = '';
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.requestError = action.payload as string;
        state.authorized = false;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.requestError = null;
        state.user = action.payload.user;
        state.authorized = true;
      });
    builder
      .addCase(checkUserAuth.pending, (state) => {
        state.loading = true;
        state.requestError = null;
        state.authorized = false;
      })
      .addCase(checkUserAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.requestError = null;
        state.authorized = true;
      })
      .addCase(checkUserAuth.rejected, (state, action) => {
        state.loading = false;
        state.requestError = action.payload as string;
        state.authorized = false;
      });
  }
});

export const userReducer = userSlice.reducer;
export const { setUser, setAuthorized, resetUser } = userSlice.actions;
