import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/auth-operations.js';

import { registerError } from 'components/Toastify/Toastify.jsx';

import { Form, Icon, Title, TextFieldStyled, Button } from './RegisterForm.styled.js';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const result = await dispatch(register({ name, email, password }));
    if (result.error) {
      registerError();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Icon />
      <Title>Register</Title>

      <TextFieldStyled id="name" type="text" label="Name" autoFocus required fullWidth />
      <TextFieldStyled id="email" type="email" label="Email" required fullWidth />
      <TextFieldStyled id="password" type="password" label="Password" required fullWidth />

      <Button type="submit">Register</Button>
    </Form>
  );
};
