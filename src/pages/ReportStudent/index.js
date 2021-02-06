import React from 'react';
import { FaBookReader, FaClipboardCheck } from 'react-icons/fa';
import {
  Title,
  Line,
  Picture,
  ContainerStudentReport,
  Container,
  StudentData,
  StudentNames,
  StudentCaracteres,
} from './Styled';

export default function ReportStudent() {
  return (
    <Container>
      <Title>
        <FaBookReader size={40} />
        <span>Boletim Escolar</span>
      </Title>
      <Line />
      <ContainerStudentReport>
        <Picture />
        <StudentData>
          <StudentNames>
            <span className="name-student">Nome:</span>
            <span className="surname-student">Sobrenome:</span>
          </StudentNames>
          <StudentCaracteres>
            <span className="age-student">Idade:</span>
            <span className="height-student">Altura:</span>
            <span className="weight-student">Peso:</span>
          </StudentCaracteres>
          <span className="email-student">E-mail</span>
        </StudentData>
      </ContainerStudentReport>
      <Title>
        <FaClipboardCheck size={30} />
        <span>Disciplinas</span>
      </Title>
    </Container>
  );
}
