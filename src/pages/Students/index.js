import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import { TiUserDelete } from 'react-icons/ti';
import {
  StudentsContainer,
  Title,
  Student,
  StudentProfilePhotograph,
  Photograph,
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
      <Title>Estudantes Wdev</Title>
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
                <FaUserCircle size={40} />
              )}
            </Photograph>
            <span className="dates">{student.name}</span>
            <span className="dates">{student.email}</span>
            <Link to={`/student/${student.id}`}>
              <FaEdit size={18} />
            </Link>
            <Link to={`/student/${student.id}`}>
              <TiUserDelete size={24} />
            </Link>
          </Student>
        ))}
      </StudentsContainer>
    </Container>
  );
}
