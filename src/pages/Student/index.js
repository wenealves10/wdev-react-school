import React from 'react';
import { useParams } from 'react-router-dom';
import { Title } from './Styled';
import { Container } from '../../styles/Global';

export default function Student() {
  const { id } = useParams();
  return (
    <Container>
      <Title>{id ? 'Editar Aluno' : 'Adicionar novo aluno'}</Title>
    </Container>
  );
}
