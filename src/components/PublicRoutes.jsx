import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const PublicRoutes = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLoggedIn);

  return isLogin ? <Navigate to={redirectTo} /> : <Component />;
};

export default PublicRoutes;
