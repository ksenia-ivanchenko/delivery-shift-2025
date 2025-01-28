export type Point = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

export type GetDeliveryPointsResponse = {
  success: boolean;
  reason?: string;
  points: Point[];
};

export type Package = {
  id: string;
  name: string;
  length: number;
  width: number;
  weight: number;
  height: number;
};

export type GetPackageTypesResponse = {
  success: boolean;
  reason?: string;
  packages: Package[];
};

export type CalculateDeliveryRequest = {
  package: Omit<Package, 'id' | 'name'>;
  senderPoint: Omit<Point, 'id' | 'name'>;
  receiverPoint: Omit<Point, 'id' | 'name'>;
};

export enum DeliveryType {
  DEFAULT = 'DEFAULT',
  EXPRESS = 'EXPRESS'
}

export type DeliveryOption = {
  id: string;
  price: number;
  days: number;
  name: string;
  type: DeliveryType;
};

export type CalculateDeliveryResponse = {
  success: boolean;
  reason: string;
  options: DeliveryOption[];
};

export type Address = {
  street: string;
  house: string;
  apartment: string;
  comment: string;
};

export type Person = {
  firstname: string;
  lastname: string;
  middlename: string;
  phone: string;
};

export enum Payer {
  RECEIVER = 'RECEIVER',
  SENDER = 'SENDER'
}

export type PostOrderRequest = {
  senderPoint: Point;
  senderAddress: Address;
  sender: Person;
  receiverPoint: Point;
  receiverAddress: Address;
  receiver: Person;
  payer: Payer;
  option: DeliveryOption;
};

export type OrderResponse = PostOrderRequest & {
  status: 0 | 1 | 2 | 3 | 4;
  cancellable: boolean;
};

export type PostOrderResponse = {
  success: boolean;
  reason?: string;
  order: OrderResponse;
};

export type GetOrdersResponse = {
  success: boolean;
  reason?: string;
  orders: Omit<OrderResponse, 'option'>;
};

export type GetOrderResponse = {
  success: boolean;
  reason?: string;
  order: Omit<OrderResponse, 'option'>;
};

export type CancelDeliveryResponse = {
  success: boolean;
  reason?: string;
};
