import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaAt, FaUser, FaUserEdit } from 'react-icons/fa';
import { GiConfirmed } from 'react-icons/gi';
import * as Yup from 'yup';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Title, Form, Button } from './Styled';
import { Container } from '../../styles/Global';
import Input from '../../components/Form/Input';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/Authentication/actions';

export default function ProfileUser() {
  const formRef = useRef(null);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    formRef.current.setData({
      name: 'Carregando...',
      email: 'Carregando...',
    });
    formRef.current.getFieldRef('name').setAttribute('readonly', 'readonly');
    formRef.current.getFieldRef('email').setAttribute('readonly', 'readonly');

    async function getData() {
      try {
        const response = await axios.get('/users/user');
        const { name, email } = get(response.data, 'user', '');
        formRef.current.setData({ name, email });
      } catch (err) {
        toast.error('Ocorreu um erro!', {
          toastId: 'error',
        });
      }
      formRef.current.getFieldRef('name').removeAttribute('readonly');
      formRef.current.getFieldRef('email').removeAttribute('readonly');
    }
    getData();
  }, []);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(4, 'Deve ter no mínimo 4 caracteres')
          .max(255, 'Deve ter no máximo 255 caracteres')
          .required('Nome é obrigatório'),
        email: Yup.string()
          .email('E-mail inválido')
          .required('E-mail é obrigatório'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      confirmAlert({
        title: 'Confirma',
        message: 'Tem certeza que deseja atualizar os dados?',
        buttons: [
          {
            label: 'Sim',
            onClick: async () => {
              try {
                await axios.put('/users/', data);
                toast.success('Perfil atualizado com sucesso!', {
                  toastId: 'put',
                });
                if (user.email !== data.email) dispatch(actions.LoginFailure());
                history.push('/profile/user');
              } catch (error) {
                toast.error('Ocorreu um erro!', {
                  toastId: 'error',
                });
              }
            },
          },
          {
            label: 'Não',
            onClick: () => {},
          },
        ],
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};
        error.inner.forEach((erro) => {
          errorMessages[erro.path] = erro.message;
          formRef.current.clearField(erro.path);
        });

        if (errorMessages.name !== undefined) {
          formRef.current.getFieldRef('name').focus();
        } else if (errorMessages.email !== undefined) {
          formRef.current.getFieldRef('email').focus();
        }

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <Title>
        <FaUserEdit size={60} />
      </Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <span className="name">
          <FaUser size={24} />
        </span>
        <Input name="name" type="text" placeholder="Digite seu nome" />

        <span className="email">
          <FaAt size={24} />
        </span>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Button type="submit">
          <span>Atualizar</span>
          <GiConfirmed size={25} />
        </Button>
      </Form>
    </Container>
  );
}
