import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaBookReader, FaClipboardCheck } from 'react-icons/fa';
import { get } from 'lodash';
import { toast } from 'react-toastify';
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
import axios from '../../services/axios';

export default function ReportStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState(0);
  const [picture, setPicture] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`student/${id}`);
        setStudent(get(data, 'student', {}));
        setPicture(get(data, 'student.profiles.url', ''));
      } catch (error) {
        toast.error('Error ao carregar dados!', {
          toastId: 'error',
        });
      }
    };
    getData();
  }, [id]);

  return (
    <Container>
      <Title>
        <FaBookReader size={40} />
        <span>Boletim Escolar</span>
      </Title>
      <Line />
      <ContainerStudentReport>
        <Picture src={picture} />
        <StudentData>
          <StudentNames>
            <span className="name-student">Nome: {student.name}</span>
            <span className="surname-student">
              Sobrenome: {student.surname}
            </span>
          </StudentNames>
          <StudentCaracteres>
            <span className="age-student">Idade: {student.age} anos</span>
            <span className="height-student">Altura: {student.height} M</span>
            <span className="weight-student">Peso: {student.weight} Kg</span>
          </StudentCaracteres>
          <span className="email-student">E-mail: {student.email}</span>
        </StudentData>
      </ContainerStudentReport>
      <Title>
        <FaClipboardCheck size={30} />
        <span>Disciplinas</span>
      </Title>
    </Container>
  );
}
