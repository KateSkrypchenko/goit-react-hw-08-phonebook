import styled from 'styled-components';
import { Box, TextField } from '@mui/material';
import { BsFillPencilFill } from 'react-icons/bs';
import { SlClose } from 'react-icons/sl';

export const BoxStyled = styled(Box)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding: 10px;
  width: 100%;
  background-color: #b1cad4;
  box-shadow: 10px 10px 10px 0px rgb(108, 108, 108);
  border-radius: 10px;
  overflow: hidden;

  @media screen and (min-width: 426px) {
    width: 450px;
    padding: 25px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 5px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: rgba(0, 35, 89, 0.77);

  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: #b71111;
  }
`;

export const IconBtnClose = styled(SlClose)`
  width: 35px;
  height: 35px;
`;

export const Title = styled.h2`
  color: rgb(0 35 89 / 77%);
`;

export const TextFieldStyled = styled(TextField)`
  border: 1px solid #487996;
  border-radius: 5px;
  background-color: #ebf4f8;
  color: #002359c4;

  transition: all 250ms linear;

  &:hover,
  &:focus {
    border: 1px solid #2196f3;
    outline: rgba(0, 0, 0, 0);
  }
`;

export const ButtonSubmit = styled.button`
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

export const IconBtn = styled(BsFillPencilFill)`
  margin-left: 10px;
`;
