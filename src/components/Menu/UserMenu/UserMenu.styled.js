import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  color: #002359c4;

  @media screen and (min-width: 426px) {
    gap: 35px;
  }
`;

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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Button = styled.button`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 100px;
  padding: 5px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid #487996;
  border-radius: 5px;
  background-color: #ebf4f8;
  color: #002359c4;

  transition: all 250ms linear;

  &:hover,
  &:focus {
    border: 1px solid #2196f3;
    color: #ebf4f8;
    background-color: #002359c4;
  }

  @media screen and (min-width: 426px) {
    width: 150px;
    padding: 10px;
  }
`;
