/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  FaBookReader,
  FaClipboardCheck,
  FaEdit,
  FaTrash,
} from 'react-icons/fa';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import {
  Title,
  Line,
  Picture,
  ContainerStudentReport,
  Container,
  StudentData,
  StudentNames,
  StudentCaracteres,
  ContainerDiscipline,
  Disciplines,
  Table,
} from './Styled';
import * as actions from '../../store/modules/Authentication/actions';
import * as colors from '../../config/colors';
import axios from '../../services/axios';
import history from '../../services/history';

export default function ReportStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState(0);
  const [picture, setPicture] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [reports, setReports] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`student/${id}`);
        setStudent(get(data, 'student', {}));
        setPicture(get(data, 'student.profiles.url', ''));
        setReports(get(data, 'student.reports', []));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        const { status } = get(error, 'response.status', 0);
        if (status === 401) {
          dispatch(actions.LoginFailure());
          toast.error('Você precisa fazer login!', {
            toastId: 'error',
          });
          history.push('/login');
        } else {
          toast.error('Estudante não existe!', {
            toastId: 'error',
          });
          history.push('/');
        }
      }
    };
    getData();
  }, [dispatch, id]);

  return (
    <Container>
      <Loading isLoading={isLoading} />
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
      <ContainerDiscipline>
        <Title>
          <FaClipboardCheck size={30} />
          <span>Disciplinas</span>
        </Title>
        <Disciplines>
          <Table>
            <thead>
              <tr>
                <th>Matéria</th>
                <th>Nota 1</th>
                <th>Nota 2</th>
                <th>Nota 3</th>
                <th>Nota 4</th>
                <th>Média</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr>
                  <td>{report.matter}</td>
                  <td>{report.note_1}</td>
                  <td>{report.note_2}</td>
                  <td>{report.note_3}</td>
                  <td>{report.note_4}</td>
                  <td>{parseFloat(report.average, 10).toFixed(2)}</td>
                  <td>
                    <span className="actions">
                      <Link to="/">
                        <FaEdit size={24} color={colors.infoColor} />
                      </Link>
                      <Link to="/">
                        <FaTrash size={20} />
                      </Link>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Disciplines>
      </ContainerDiscipline>
    </Container>
  );
}
