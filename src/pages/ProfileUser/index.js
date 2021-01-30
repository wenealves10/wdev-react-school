import React, { /* useState, useEffect, */ useRef } from 'react';
import { FaUser } from 'react-icons/fa';
import { Title, Form } from './Styled';
import { Container } from '../../styles/Global';
import Input from '../../components/Form/Input';

export default function ProfileUser() {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    console.log(data);
    reset();
  }

  return (
    <Container>
      <Title>
        <FaUser size={45} />
      </Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Digite seu nome" />
      </Form>
    </Container>
  );
}
