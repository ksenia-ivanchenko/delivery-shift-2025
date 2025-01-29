import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'store';
import { Preloader } from 'ui-kit';
import { deleteCookie } from 'cookies';

export type ProtectedRouteProps = {
  children: ReactElement;
  type: 'auth' | 'unauth';
};
export const ProtectedRoute = ({ children, type }: ProtectedRouteProps) => {
  const { loading,  } = useSelector((state) => state.user);
  let authorized = false
  if (type === 'auth' && !authorized && !loading) {
    return <Navigate to='/auth' />;
  }

  if (type === 'unauth' && authorized && !loading) {
    return <Navigate to='/' />;
  }

  if (loading) {
    return <Preloader />;
  }

  return children;
};
