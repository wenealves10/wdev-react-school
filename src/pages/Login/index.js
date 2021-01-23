import React from 'react';
import { FaSignInAlt, FaUserCircle } from 'react-icons/fa';
import { Button, Form } from './Styled';
import { Container } from '../../styles/Global';
import Input from '../../components/Form/Input';

export default function Login() {
  function handleSubmit(data) {
    // eslint-disable-next-line no-console
    console.log(data);
  }
  return (
    <Container>
      <FaUserCircle size={42} />
      <Form onSubmit={handleSubmit}>
        <span>E-mail</span>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <span>Senha</span>
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <Button type="submit">
          <FaSignInAlt size={30} />
        </Button>
      </Form>
    </Container>
  );
}
