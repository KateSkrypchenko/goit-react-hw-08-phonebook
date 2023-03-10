import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 15px;
  text-align: center;
  font-size: 15px;
  color: rgba(0, 35, 89, 0.77);

  @media screen and (min-width: 426px) {
    padding: 35px;
    font-size: 20px;
  }
`;

export const Link = styled(NavLink)`
  color: #0000ff;
`;
