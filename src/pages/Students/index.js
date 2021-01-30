import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FaEdit, FaUserGraduate } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { TiUserDelete } from 'react-icons/ti';
import {
  StudentsContainer,
  Title,
  Student,
  StudentProfilePhotograph,
  Photograph,
  Link,
} from './Styled';
import { Container } from '../../styles/Global';
import axios from '../../services/axios';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getStudents() {
      try {
        const response = await axios.get('/student');
        setStudents(response.data.students);
      } catch (error) {
        toast.error('Ocorreu um erro!', {
          toastId: 'students',
        });
      }
    }
    getStudents();
  }, []);

  return (
    <Container>
      <Title>
        <IoIosPeople size={60} title="Escola Wdev" />
        <span>Alunos</span>
      </Title>
      <StudentsContainer>
        {students.map((student) => (
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
            <span className="button">
              <Link to={`/student/${student.id}`}>
                <FaEdit size={18} />
              </Link>
              <Link to={`/student/${student.id}`}>
                <TiUserDelete size={24} />
              </Link>
            </span>
          </Student>
        ))}
      </StudentsContainer>
    </Container>
  );
}
