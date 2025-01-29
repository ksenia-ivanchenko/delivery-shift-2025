import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout, ProtectedRoute } from 'components';
import { checkUserAuth, useDispatch } from 'store';
import {
  AuthPage,
  CheckoutPage,
  HistoryPage,
  MainPage,
  OrderDetailsPage,
  ProfilePage
} from 'pages';
import { ROUTES } from 'constants';
import { useEffect } from 'react';

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
    path: ROUTES.DETAILS,
    element: (
      <Layout>
        <ProtectedRoute type='auth'>
          <OrderDetailsPage />
        </ProtectedRoute>
      </Layout>
    )
  },
  {
    path: ROUTES.DETAILS,
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
  }, []);

  return <RouterProvider router={router} />;
}
