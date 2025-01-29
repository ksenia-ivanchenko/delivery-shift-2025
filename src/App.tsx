import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from 'components';
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
    element: <MainPage />
  },
  {
    path: ROUTES.PROFILE,
    element: (
      <ProtectedRoute type='auth'>
        <ProfilePage />
      </ProtectedRoute>
    )
  },
  {
    path: ROUTES.ORDERS,
    element: (
      <ProtectedRoute type='auth'>
        <HistoryPage />
      </ProtectedRoute>
    )
  },
  {
    path: ROUTES.DETAILS,
    element: (
      <ProtectedRoute type='auth'>
        <OrderDetailsPage />
      </ProtectedRoute>
    )
  },
  {
    path: ROUTES.DETAILS,
    element: <CheckoutPage />
  },
  {
    path: ROUTES.AUTH,
    element: (
      <ProtectedRoute type='unauth'>
        <AuthPage />
      </ProtectedRoute>
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
