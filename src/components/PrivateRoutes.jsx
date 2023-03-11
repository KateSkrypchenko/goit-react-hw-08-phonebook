import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/auth-selectors';

export const PrivateRoutes = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return !isLogin && !isRefreshing ? <Navigate to={redirectTo} /> : <Component />;
};
