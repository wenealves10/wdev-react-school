/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  FaBookReader,
  FaClipboardCheck,
  FaEdit,
  FaTrash,
  FaPlus,
} from 'react-icons/fa';
import * as Yup from 'yup';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import Input from '../../components/Form/Input';
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
  Button,
  Rodal,
  Form,
} from './Styled';
import * as actions from '../../store/modules/Authentication/actions';
import * as colors from '../../config/colors';
import axios from '../../services/axios';
import history from '../../services/history';

const initialData = {
  matter: '',
  note_1: 0,
  note_2: 0,
  note_3: 0,
  note_4: 0,
};

export default function ReportStudent() {
  const { id } = useParams();
  const formRef = useRef(null);
  const [student, setStudent] = useState(0);
  const [picture, setPicture] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [reports, setReports] = useState([]);
  const [reportId, setReportId] = useState(0);
  const [reportIndexCurrent, setReportIndexCurrent] = useState(0);
  const [isHideModalDeleteReport, setIsHideModalDeleteReport] = useState(false);
  const [isHideModalCreateReport, setIsHideModalCreateReport] = useState(false);
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
  }, [dispatch, id, isLoading]);

  const handleSubmitReport = useCallback(
    async (data, { reset }) => {
      try {
        const schema = Yup.object().shape({
          matter: Yup.string()
            .min(4, 'no mínimo 4 caracteres')
            .max(255, 'no máximo 255 caracteres')
            .required('Máteria obrigátorio'),
          note_1: Yup.number()
            .typeError('Somente números')
            .max(10, 'no máximo 10'),
          note_2: Yup.number()
            .typeError('Somente números')
            .max(10, 'no máximo 10'),
          note_3: Yup.number()
            .typeError('Somente números')
            .max(10, 'no máximo 10'),
          note_4: Yup.number()
            .typeError('Somente números')
            .max(10, 'no máximo 10'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        reset();
        formRef.current.setErrors({});
        formRef.current.setData(initialData);
        setIsHideModalCreateReport(false);
        setIsLoading(true);
        const { matter, note_1, note_2, note_3, note_4 } = data;
        if (reportId) {
          const response = await axios.put(`report/${reportId}/student/${id}`, {
            matter,
            note_1: parseFloat(note_1, 10),
            note_2: parseFloat(note_2, 10),
            note_3: parseFloat(note_3, 10),
            note_4: parseFloat(note_4, 10),
          });
          toast.success('Matéria atualizada com sucesso!');
        } else {
          const response = await axios.post(`report/student/${id}`, {
            matter,
            note_1: parseFloat(note_1, 10),
            note_2: parseFloat(note_2, 10),
            note_3: parseFloat(note_3, 10),
            note_4: parseFloat(note_4, 10),
          });
          toast.success(`Matéria cadastrada com sucesso!${reportId}`);
        }
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errorMessages = {};
          error.inner.forEach((erro) => {
            errorMessages[erro.path] = erro.message;
            formRef.current.clearField(erro.path);
          });

          formRef.current.setErrors(errorMessages);
        }
      }
    },
    [id, reportId]
  );

  const handleDeleteReport = useCallback(async () => {
    const reportStudent = [...reports];
    try {
      setIsHideModalDeleteReport(false);
      setIsLoading(true);
      await axios.delete(`report/${reportId}/student/${id}`);
      toast.success('Matéria apagada com sucesso!', {
        toastId: 'reportDelete',
      });
      reportStudent.splice(reportIndexCurrent, 1);
      setReports(reportStudent);
      setReportId(0);
      setReportIndexCurrent(0);
      setIsLoading(false);
    } catch {
      toast.error('Ocorreu um erro!', {
        toastId: 'studentDel',
      });
      setReportId(0);
      setReportIndexCurrent(0);
      setIsLoading(false);
    }
  }, [id, reportId, reportIndexCurrent, reports]);

  const handleEditClickReport = useCallback(
    (e, idReport, indexReport) => {
      e.preventDefault();
      setIsHideModalCreateReport(true);
      setReportId(idReport);
      const { matter, note_1, note_2, note_3, note_4 } = reports[indexReport];
      formRef.current.setData({ matter, note_1, note_2, note_3, note_4 });
    },
    [reports]
  );

  const handleTrashClickModal = useCallback((e, idReport, indexReport) => {
    e.preventDefault();
    setIsHideModalDeleteReport(true);
    setReportId(idReport);
    setReportIndexCurrent(indexReport);
  }, []);

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
              {reports.map((report, index) => (
                <tr key={report.id}>
                  <td>{report.matter}</td>
                  <td>{report.note_1}</td>
                  <td>{report.note_2}</td>
                  <td>{report.note_3}</td>
                  <td>{report.note_4}</td>
                  <td>{parseFloat(report.average, 10).toFixed(2)}</td>
                  <td>
                    <span className="actions">
                      <Link
                        to="/edit"
                        onClick={(e) =>
                          handleEditClickReport(e, report.id, index)
                        }
                      >
                        <FaEdit size={24} color={colors.infoColor} />
                      </Link>
                      <Link
                        to="/delete"
                        onClick={(e) =>
                          handleTrashClickModal(e, report.id, index)
                        }
                      >
                        <FaTrash size={20} />
                      </Link>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Rodal
            visible={isHideModalCreateReport}
            onClose={() => setIsHideModalCreateReport(false)}
            animation="zoom"
            showMask
            duration={0}
          >
            <Title>Cadastrar matéria</Title>
            <Form
              ref={formRef}
              onSubmit={handleSubmitReport}
              initialData={initialData}
            >
              <Input
                name="matter"
                type="text"
                placeholder="Matéria"
                id="matter"
              />
              <div className="notes">
                <Input name="note_1" type="text" placeholder="nota 1" />
                <Input name="note_2" type="text" placeholder="nota 2" />
                <Input name="note_3" type="text" placeholder="nota 3" />
                <Input name="note_4" type="text" placeholder="nota 4" />
              </div>
              <div className="button-options">
                <Button type="submit">Salvar</Button>
                <Button
                  type="button"
                  onClick={() => {
                    setIsHideModalCreateReport(false);
                    formRef.current.setErrors({});
                    formRef.current.setData(initialData);
                  }}
                >
                  Não Salvar
                </Button>
              </div>
            </Form>
          </Rodal>

          <Rodal
            visible={isHideModalDeleteReport}
            onClose={() => setIsHideModalDeleteReport(false)}
            animation="zoom"
            showMask
            duration={0}
          >
            <Title>Deseja apagar a matéria?</Title>
            <p style={{ marginTop: 50 }}>
              Se apagar, essa disciplina
              <br />
              você perdera tudo sobre ele!!
            </p>
            <div className="button-options">
              <Button
                onClick={() => {
                  handleDeleteReport();
                }}
              >
                Sim
              </Button>
              <Button onClick={() => setIsHideModalDeleteReport(false)}>
                Não
              </Button>
            </div>
          </Rodal>

          <Button onClick={() => setIsHideModalCreateReport(true)}>
            <FaPlus size={24} />
            <span>Adicionar</span>
          </Button>
        </Disciplines>
      </ContainerDiscipline>
    </Container>
  );
}
