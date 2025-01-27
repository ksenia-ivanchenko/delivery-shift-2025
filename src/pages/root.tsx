import { useDispatch, useSelector } from 'react-redux';
import {
  createOtp,
  getDeliveryPoints,
  getPackageTypes,
  getUserSession,
  calculateDelivery,
  signIn,
  postOrder,
  Payer,
  DeliveryType,
  getOrders,
  getOrder,
  cancelDelivery
} from '../utils/api';

export function RootPage() {
  const dispatch = useDispatch();

  return <></>;
}
