import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkNav = styled(NavLink)`
  padding: 10px;
  color: rgba(0, 35, 89, 0.77);

  &.active {
    border-radius: 5px;
    color: rgb(235, 244, 248);
    background-color: rgba(0, 35, 89, 0.77);
  }

  @media screen and (min-width: 426px) {
    padding: 15px;
  }
`;
