import { DeliveryOption, Package, Point } from 'api';

export type DeliveryState = {
  points: Point[];
  packageTypes: Package[];
  deliveryOptions: DeliveryOption[];
  loading: boolean;
  requestError: null | string;
};
