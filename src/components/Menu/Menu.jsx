import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

import { Header, Nav, LinkNav } from './Menu.styled';

import { AuthMenu } from './AuthMenu/AuthMenu';
import { UserMenu } from './UserMenu/UserMenu';

export const Menu = () => {
  const isLogin = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Nav>
        <LinkNav to="/">Home</LinkNav>
        {!isLogin ? <AuthMenu /> : <UserMenu />}
      </Nav>
    </Header>
  );
};
