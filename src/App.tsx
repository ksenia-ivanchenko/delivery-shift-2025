import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';

import { Layout, ProtectedRoute } from 'components';
import { checkUserAuth, getDeliveryPoints, getPackageTypes, useDispatch } from 'store';
import { ROUTES } from 'constants';
import {
  AuthPage,
  CheckoutPage,
  HistoryPage,
  MainPage,
  OrderDetailsPage,
  ProfilePage
} from 'pages';

const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,
    element: (
      <Layout>
        <MainPage />
      </Layout>
    )
  },
  {
    path: ROUTES.PROFILE,
    element: (
      <Layout>
        <ProtectedRoute type='auth'>
          <ProfilePage />
        </ProtectedRoute>
      </Layout>
    )
  },
  {
    path: ROUTES.ORDERS,
    element: (
      <Layout>
        <ProtectedRoute type='auth'>
          <HistoryPage />
        </ProtectedRoute>
      </Layout>
    )
  },
  {
    path: ROUTES.ORDER_DETAILS,
    element: (
      <Layout>
        <ProtectedRoute type='auth'>
          <OrderDetailsPage />
        </ProtectedRoute>
      </Layout>
    )
  },
  {
    path: ROUTES.CHECKOUT,
    element: (
      <Layout>
        <CheckoutPage />
      </Layout>
    )
  },
  {
    path: ROUTES.AUTH,
    element: (
      <Layout>
        <ProtectedRoute type='unauth'>
          <AuthPage />
        </ProtectedRoute>
      </Layout>
    )
  }
]);

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserAuth());
    dispatch(getDeliveryPoints());
    dispatch(getPackageTypes());
  }, []);

  return <RouterProvider router={router} />;
}
