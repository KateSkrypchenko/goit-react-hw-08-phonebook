import styled from 'styled-components';
import { TextField } from '@mui/material';
import { FaHouseUser } from 'react-icons/fa';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

export const Icon = styled(FaHouseUser)`
  width: 85px;
  height: 85px;

  color: #002359c4;
`;

export const Title = styled.h2`
  color: rgb(0 35 89 / 77%);
`;

export const TextFieldStyled = styled(TextField)`
  border: 1px solid #487996;
  border-radius: 5px;
  background-color: #ebf4f8;
  color: #002359c4;

  transition: border 250ms linear;

  &:hover,
  &:focus {
    border: 1px solid #2196f3;
    outline: rgba(0, 0, 0, 0);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
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
`;
