import { IoMdLogOut } from 'react-icons/io';

import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

import { Container, LinkNav, Wrapper, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <LinkNav to="/contacts">Contacts</LinkNav>
      <Wrapper>
        <p>{user.email}</p>
        <Button onClick={onLogout}>
          Logout <IoMdLogOut />
        </Button>
      </Wrapper>
    </Container>
  );
};
