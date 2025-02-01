import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Address, DeliveryOption, DeliveryType, Payers, Point, User } from 'api';
import { OrderState } from './types';
import { createOrder } from './thunks';

const initialAddress = {
  street: '',
  house: '',
  apartment: '',
  comment: ''
};
const initialPerson = {
  phone: '',
  firstname: '',
  middlename: '',
  lastname: '',
  city: ''
};
const initialPoint = {
  id: '',
  name: '',
  latitude: 0,
  longitude: 0
};

export const initialState: OrderState = {
  senderPoint: initialPoint,
  sender: initialPerson,
  senderAddress: initialAddress,
  receiverPoint: initialPoint,
  receiver: initialPerson,
  receiverAddress: initialAddress,
  payer: 'RECEIVER',
  option: {
    id: '',
    price: 0,
    days: 0,
    name: '',
    type: DeliveryType.DEFAULT
  },
  loading: false,
  requestError: null,
  status: null,
  cancellable: false,
  _id: ''
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
    },
    setPayer: (state, action: PayloadAction<Payers>) => {
      state.payer = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.requestError = null;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.requestError = action.payload.reason;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.order.status;
        state.cancellable = action.payload.order.cancellable;
        state._id = action.payload.order._id;
      });
    // builder
    //   .addCase(cancelOrder.pending, (state) => {
    //     state.loading = true;
    //     state.requestError = null;
    //   })
    //   .addCase(cancelOrder.rejected, (state, action) => {
    //     state.loading = false;
    //     state.requestError = action.payload.reason;
    //   })
    //   .addCase(cancelOrder.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.
    //   });
  }
});

export const {
  setDeliveryOption,
  setReceiverPoint,
  setSenderPoint,
  setReceiver,
  setSender,
  setReceiverAddress,
  setSenderAddress,
  setPayer
} = orderSlice.actions;
