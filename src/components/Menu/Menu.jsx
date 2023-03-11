import { useSelector } from 'react-redux';

import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/auth-selectors';

import { Header, Nav, LinkNav } from './Menu.styled';

import { AuthMenu } from './AuthMenu/AuthMenu';
import { UserMenu } from './UserMenu/UserMenu';
import { Loader } from 'components/Loader/Loader';

export const Menu = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Header>
      <Nav>
        <LinkNav to="/">Home</LinkNav>

        {!isLogin ? <AuthMenu /> : <UserMenu />}
      </Nav>
    </Header>
  );
};
