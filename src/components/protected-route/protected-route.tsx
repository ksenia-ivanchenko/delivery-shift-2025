import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'store';
import { Preloader } from 'ui-kit';

export type ProtectedRouteProps = {
  children: ReactElement;
  type: 'auth' | 'unauth';
};
export const ProtectedRoute = ({ children, type }: ProtectedRouteProps) => {
  const { loading, authorized } = useSelector((state) => state.user);

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
