import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { current } from 'redux/auth/auth-operations';

import { Menu } from './Menu/Menu';
import { UserRoutes } from './UserRoutes';

import { GlobalStyle } from './GlobalStyles';
import { Wrapper } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Wrapper>
      <GlobalStyle />
      <Menu />
      <UserRoutes />
    </Wrapper>
  );
};
