import { LinkNav } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <div>
      <LinkNav to="/register">Register</LinkNav>
      <LinkNav to="/login">Login</LinkNav>
    </div>
  );
};
