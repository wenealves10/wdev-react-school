import React, { useState, useRef } from 'react';
import { FaAt, FaLock, FaSignInAlt, FaUserCircle } from 'react-icons/fa';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { Button, Form, FaRegEye, FaRegEyeSlash, Title, Link } from './Styled';
import { Container } from '../../styles/Global';
import Input from '../../components/Form/Input';
import * as actions from '../../store/modules/Authentication/actions';

export default function Login(props) {
  const [eye, setEye] = useState(false);
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const prevPatch = get(props, 'location.state.prevPath', '/');
  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('E-mail Inválido')
          .required('E-mail é obrigatório'),
        password: Yup.string()
          .min(4, 'No mínimo 4 caracteres')
          .required('Senha é obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current.setErrors({});
      reset();

      dispatch(actions.LoginRequest({ ...data, prevPatch }));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};
        error.inner.forEach((erro) => {
          errorMessages[erro.path] = erro.message;
          formRef.current.clearField(erro.path);
        });
        if (errorMessages.email !== undefined) {
          formRef.current.getFieldRef('email').focus();
        } else {
          formRef.current.getFieldRef('password').focus();
        }

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  function handleClick() {
    setEye(!eye);
  }

  return (
    <Container>
      <FaUserCircle size={50} />
      <Title>Admin System</Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <span className="email">
          <FaAt size={24} />
        </span>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <span className="password">
          <FaLock size={24} />
        </span>

        {eye ? (
          <FaRegEyeSlash
            className="eye-slash"
            size={24}
            onClick={handleClick}
          />
        ) : (
          <FaRegEye size={24} className="eye-slash" onClick={handleClick} />
        )}

        <Input
          type={eye ? 'text' : 'password'}
          name="password"
          placeholder="Digite sua senha"
        />

        <Link to="/forgot/password">
          <p>Esqueci minha senha</p>
        </Link>

        <Button type="submit">
          <span>Entrar</span>
          <FaSignInAlt size={30} />
        </Button>
      </Form>
    </Container>
  );
}
