import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/auth-operations';

import { Form, Icon, Title, TextFieldStyled, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    dispatch(login({ email, password }));
    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Icon />
      <Title>Login</Title>
      <TextFieldStyled id="email" type="email" label="Email" autoFocus required fullWidth />
      <TextFieldStyled id="password" type="password" label="Password" required fullWidth />
      <Button type="submit">Login</Button>
    </Form>
  );
};
