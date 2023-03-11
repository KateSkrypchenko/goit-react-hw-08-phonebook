import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { current } from 'redux/auth/auth-operations';
import { selectIsRefreshing } from 'redux/auth/auth-selectors';

import { Menu } from './Menu/Menu';
import { UserRoutes } from './UserRoutes';
import { Loader } from 'components/Loader/Loader';
import { Toastify } from './Toastify/Toastify';

import { GlobalStyle } from './GlobalStyles';
import { Wrapper } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Wrapper>
      <GlobalStyle />
      <Menu />
      {isRefreshing ? <Loader /> : <UserRoutes />}

      <Toastify />
    </Wrapper>
  );
};
