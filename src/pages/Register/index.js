import React, { useState, useRef, useCallback } from 'react';
import { FaUserCircle, FaUser, FaAt, FaLock } from 'react-icons/fa';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Title, Form, Button, FaRegEye, FaRegEyeSlash } from './Styled';
import { Container } from '../../styles/Global';
import axios from '../../services/axios';
import Input from '../../components/Form/Input';
import Loading from '../../components/Loading';

export default function Register() {
  const formRef = useRef(null);
  const [eye, setEye] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setEye(!eye);
  }, [eye]);

  const handleSubmit = useCallback(async (data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(4, 'no mínimo 4 caracteres')
          .max(255, 'no máximo 255 caracteres')
          .required('Nome é obrigatório'),
        email: Yup.string()
          .email('E-mail inválido')
          .required('E-mail é obrigatório'),
        password: Yup.string()
          .min(6, 'no mínimo 6 caracteres')
          .max(50, 'no máximo 50 caracteres')
          .required('Senha é obrigatória'),
        passwordRepite: Yup.string()
          .oneOf([Yup.ref('password')], 'Senha não coincidem')
          .required('Confirmação de senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current.setErrors({});
      reset();
      const { name, email, password } = data;
      setIsLoading(true);
      await axios.post('/users/', { name, email, password });
      toast.success('Usuário cadastrado com sucesso!', {
        toastId: 'postUser',
      });
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorsMessages = {};

        error.inner.forEach((erro) => {
          errorsMessages[erro.path] = erro.message;
          formRef.current.clearField(erro.path);
        });

        if (errorsMessages.name !== undefined) {
          formRef.current.getFieldRef('name').focus();
        } else if (errorsMessages.email !== undefined) {
          formRef.current.getFieldRef('email').focus();
        } else if (errorsMessages.password !== undefined) {
          formRef.current.getFieldRef('password').focus();
        } else {
          formRef.current.getFieldRef('passwordRepite').focus();
        }

        formRef.current.setErrors(errorsMessages);
      } else {
        const status = get(error, 'response.status', 0);
        if (status === 400) {
          toast.error('Usuário já Existe!');
        } else {
          toast.error('Ocorreu um erro ao criar usuário!');
        }
        setIsLoading(false);
      }
    }
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>
        <FaUserCircle size={60} />
        <span>Adicionar novo usuário</span>
      </Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <span className="name">
          <FaUser size={24} />
        </span>
        <Input name="name" type="text" placeholder="Digite o nome do usuário" />
        <span className="email">
          <FaAt size={24} />
        </span>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />

        <span className="password">
          <FaLock size={24} />
        </span>

        {eye ? (
          <FaRegEyeSlash
            className="eye-slash"
            size={24}
            onClick={handleClick}
            top="120px"
          />
        ) : (
          <FaRegEye
            size={24}
            top="120px"
            className="eye-slash"
            onClick={handleClick}
          />
        )}

        <Input
          type={eye ? 'text' : 'password'}
          name="password"
          placeholder="Digite sua senha"
        />

        <span className="password-repite">
          <FaLock size={24} />
        </span>

        <Input
          type={eye ? 'text' : 'password'}
          name="passwordRepite"
          placeholder="Repita sua senha novamente"
        />
        <Button type="submit">
          <span>Cadastrar</span>
        </Button>
      </Form>
    </Container>
  );
}
