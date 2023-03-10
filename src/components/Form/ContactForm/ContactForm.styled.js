import styled from 'styled-components';
import { TextField } from '@mui/material';
import { BsTelephonePlus } from 'react-icons/bs';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 25px;
  max-width: 250px;

  @media screen and (min-width: 426px) {
    max-width: 450px;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  background: -webkit-linear-gradient(#438dff, #2f2f2f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: 426px) {
    font-size: 30px;
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
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

export const IconBtn = styled(BsTelephonePlus)`
  margin-left: 10px;
`;
