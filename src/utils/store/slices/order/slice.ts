import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Address, DeliveryOption, DeliveryType, Point, User } from 'api';
import { OrderState } from './types';

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
    city: ''
  },
  receiverAddress: {
    street: '',
    house: '',
    apartment: '',
    comment: ''
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
  reducers: {
    setDeliveryOption: (state, action: PayloadAction<DeliveryOption>) => {
      state.option = action.payload;
    },
    setReceiverPoint: (state, action: PayloadAction<Point>) => {
      state.receiverPoint = action.payload;
      state.receiver.city = action.payload.name;
    },
    setSenderPoint: (state, action: PayloadAction<Point>) => {
      state.senderPoint = action.payload;
      state.sender.city = action.payload.name;
    },
    setReceiver: (state, action: PayloadAction<User>) => {
      state.receiver = { ...state.receiver, ...action.payload };
    },
    setSender: (state, action: PayloadAction<User>) => {
      state.sender = { ...state.sender, ...action.payload };
    },
    setReceiverAddress: (state, action: PayloadAction<Address>) => {
      state.receiverAddress = action.payload;
    },
    setSenderAddress: (state, action: PayloadAction<Address>) => {
      state.senderAddress = action.payload;
    }
  },
  extraReducers: (builder) => {}
});

export const {
  setDeliveryOption,
  setReceiverPoint,
  setSenderPoint,
  setReceiver,
  setSender,
  setReceiverAddress,
  setSenderAddress
} = orderSlice.actions;
