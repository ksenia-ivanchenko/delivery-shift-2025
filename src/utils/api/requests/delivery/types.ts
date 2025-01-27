export type TPoint = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

export type TGetDeliveryPointsResponse = {
  success: boolean;
  reason?: string;
  points: TPoint[];
};

export type TPackage = {
  id: string;
  name: string;
  length: number;
  width: number;
  weight: number;
  height: number;
};

export type TGetPackageTypesResponse = {
  success: boolean;
  reason?: string;
  packages: TPackage[];
};

export type TCalculateDeliveryRequest = {
  package: Omit<TPackage, 'id' | 'name'>;
  senderPoint: Omit<TPoint, 'id' | 'name'>;
  receiverPoint: Omit<TPoint, 'id' | 'name'>;
};

export enum DeliveryType {
  DEFAULT = 'DEFAULT',
  EXPRESS = 'EXPRESS'
}

export type TDeliveryOption = {
  id: string;
  price: number;
  days: number;
  name: string;
  type: DeliveryType;
};

export type TCalculateDeliveryResponse = {
  success: boolean;
  reason: string;
  options: TDeliveryOption[];
};

export type TAddress = {
  street: string;
  house: string;
  apartment: string;
  comment: string;
};

export type TPerson = {
  firstname: string;
  lastname: string;
  middlename: string;
  phone: string;
};

export enum Payer {
  RECEIVER = 'RECEIVER',
  SENDER = 'SENDER'
}

export type TPostOrderRequest = {
  senderPoint: TPoint;
  senderAddress: TAddress;
  sender: TPerson;
  receiverPoint: TPoint;
  receiverAddress: TAddress;
  receiver: TPerson;
  payer: Payer;
  option: TDeliveryOption;
};

export type TOrderResponse = TPostOrderRequest & {
  status: 0 | 1 | 2 | 3 | 4;
  cancellable: boolean;
};

export type TPostOrderResponse = {
  success: boolean;
  reason?: string;
  order: TOrderResponse;
};

export type TGetOrdersResponse = {
  success: boolean;
  reason?: string;
  orders: Omit<TOrderResponse, 'option'>;
};

export type TGetOrderResponse = {
  success: boolean;
  reason?: string;
  order: Omit<TOrderResponse, 'option'>;
};

export type TCancelDeliveryResponse = {
  success: boolean;
  reason?: string;
};
