import React from 'react';
import { FaUserCircle, FaSignInAlt } from 'react-icons/fa';
import { Button, Title } from './Styled';
import { Container } from '../../styles/Global';
import Forms from '../../components/Form';

export default function Login() {
  return (
    <Container>
      <Title>
        <FaUserCircle size={50} />
      </Title>
      <Forms>
        <span>E-mail</span>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
        />
        <span>Senha</span>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha"
        />
        <Button type="submit">
          <FaSignInAlt size={30} />
        </Button>
      </Forms>
    </Container>
  );
}
