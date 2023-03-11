import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/auth-operations';

import { loginError } from 'components/Toastify/Toastify';

import { Form, Icon, Title, TextFieldStyled, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const result = await dispatch(login({ email, password }));
    if (result.error) {
      loginError();
    }
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
