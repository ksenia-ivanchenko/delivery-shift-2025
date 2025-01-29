import { DeliveryType } from 'utils/api';
import { OrderState } from './types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: OrderState = {
  senderPoint: {
    id: '',
    name: '',
    latitude: 0,
    longitude: 0
  },
  sender: {
    phone: '',
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    city: ''
  },
  senderAddress: {
    street: '',
    house: '',
    apartment: '',
    comment: ''
  },
  receiverPoint: {
    id: '',
    name: '',
    latitude: 0,
    longitude: 0
  },
  receiver: {
    phone: '',
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    city: ''
  },
  payer: 'RECEIVER',
  option: {
    id: '',
    price: 0,
    days: 0,
    name: '',
    type: DeliveryType.DEFAULT
  },
  loading: false,
  requestError: null
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
});
