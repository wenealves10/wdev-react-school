import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  FaEdit,
  FaUserGraduate,
  FaRegAddressCard,
  FaPlus,
  FaBook,
} from 'react-icons/fa';
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
  AddStudent,
} from './Styled';
import { Container } from '../../styles/Global';
import axios from '../../services/axios';
import history from '../../services/history';
import * as colors from '../../config/colors';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hide, setHide] = useState(false);
  const [studentID, setStudentID] = useState(0);
  const [indexID, setIndexID] = useState(0);
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

  async function handleDeleteStudent() {
    const newStudents = [...students];
    try {
      setHide(false);
      setIsLoading(true);
      await axios.delete(`/student/${studentID}`);
      toast.success('Estudante Apagado com sucesso!', {
        toastId: 'studentDel',
      });
      newStudents.splice(indexID, 1);
      setStudents(newStudents);
      setIsLoading(false);
      setStudentID(0);
      setIndexID(0);
    } catch {
      toast.error('Ocorreu um erro!', {
        toastId: 'studentDel',
      });
      setIsLoading(false);
      setStudentID(0);
      setIndexID(0);
    }
  }

  const handleClickModal = useCallback((e, ID, index) => {
    e.preventDefault();
    setHide(true);
    setStudentID(ID);
    setIndexID(index);
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
                    title={student.name}
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
                <Link to={`/report/student/${student.id}`}>
                  <FaBook size={20} color={colors.infoColor} />
                </Link>
                <Link to={`/student/${student.id}`}>
                  <FaEdit size={20} color={colors.errorColor} />
                </Link>
                <Link
                  to="/delete"
                  onClick={(e) => handleClickModal(e, student.id, index)}
                >
                  <TiUserDelete size={24} />
                </Link>
              </span>
            </Student>
          ))}

          <Rodal
            visible={hide}
            onClose={() => setHide(false)}
            animation="zoom"
            showMask
            duration={0}
          >
            <Title>Deseja apagar aluno?</Title>
            <p style={{ marginTop: 50 }}>
              Se apagar esse aluno
              <br />
              você perdera tudo sobre ele!!
            </p>
            <div className="button-options">
              <Button onClick={() => handleDeleteStudent()}>Sim</Button>
              <Button onClick={() => setHide(false)}>Não</Button>
            </div>
          </Rodal>

          <AddStudent onClick={() => history.push('/student')}>
            <span>Adicionar</span>
            <FaPlus size={20} />
          </AddStudent>
        </StudentsContainer>
      </Container>
    </Loading>
  );
}
