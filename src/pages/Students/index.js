import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FaEdit, FaUserGraduate, FaRegAddressCard } from 'react-icons/fa';
import { TiUserDelete } from 'react-icons/ti';
import Loading from 'styled-content-loader';
import {
  StudentsContainer,
  Title,
  Student,
  StudentProfilePhotograph,
  Photograph,
  Link,
  Rodal,
  Button,
} from './Styled';
import { Container } from '../../styles/Global';
import axios from '../../services/axios';
import * as colors from '../../config/colors';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    async function getStudents() {
      try {
        const response = await axios.get('/student');
        setStudents(response.data.students);
        setIsLoading(false);
      } catch (error) {
        toast.error('Ocorreu um erro!', {
          toastId: 'students',
        });
        setIsLoading(false);
      }
    }
    getStudents();
  }, []);

  async function handleDeleteStudent(id, index) {
    const newStudents = [...students];
    try {
      setIsLoading(true);
      await axios.delete(`/student/${id}`);
      toast.success('Estudante Apagado com sucesso!', {
        toastId: 'studentDel',
      });
      newStudents.splice(index, 1);
      setStudents(newStudents);
      setIsLoading(false);
    } catch (error) {
      toast.error('Ocorreu um erro!', {
        toastId: 'studentDel',
      });
      setIsLoading(false);
    }
  }

  const handleClickModal = useCallback((e) => {
    e.preventDefault();
    setHide(true);
  }, []);

  return (
    <Loading
      isLoading={isLoading}
      backgroundColor={colors.backgroundColor}
      foregroundColor={colors.foregroundColor}
    >
      <Container>
        <Title>
          <FaRegAddressCard size={40} title="Escola Wdev" />
          <span>Alunos matriculados</span>
        </Title>

        <StudentsContainer>
          {students.map((student, index) => (
            <Student key={String(student.id)}>
              <Photograph>
                {student.profiles ? (
                  <StudentProfilePhotograph
                    src={student.profiles.url}
                    alt={student.profiles.filename}
                  />
                ) : (
                  <FaUserGraduate size={35} />
                )}
              </Photograph>
              <span className="name_email">
                <strong>{student.name}</strong>
                <strong>{student.email}</strong>
              </span>
              <span className="actions">
                <Link to={`/student/${student.id}`}>
                  <FaEdit size={20} color="#ff9966" />
                </Link>
                <Link to="/delete" onClick={handleClickModal}>
                  <TiUserDelete size={24} />
                </Link>
              </span>
              <Rodal
                visible={hide}
                onClose={() => setHide(false)}
                animation="zoom"
                showMask
                duration={0}
              >
                <Title>Deseja apagar aluno?</Title>
                <p style={{ marginTop: 50 }}>
                  {student.name} {student.surname} <br />
                  {student.email}
                </p>
                <div className="button-options">
                  <Button
                    onClick={() => handleDeleteStudent(student.id, index)}
                  >
                    Sim
                  </Button>
                  <Button onClick={() => setHide(false)}>Não</Button>
                </div>
              </Rodal>
            </Student>
          ))}
        </StudentsContainer>
      </Container>
    </Loading>
  );
}
