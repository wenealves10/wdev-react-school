import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { FaAt, FaRedoAlt, FaLock } from 'react-icons/fa';
import { SiJsonwebtokens } from 'react-icons/si';
import { useDispatch } from 'react-redux';
import {
  Form,
  Title,
  Paragraph,
  Button,
  FaRegEye,
  FaRegEyeSlash,
} from './Styled';
import { Container } from '../../styles/Global';
import Input from '../../components/Form/Input';
import * as actionsRecovery from '../../store/modules/Authentication/actions';

export default function PasswordRecovery() {
  const [eye, setEye] = useState(false);
  const formRef = useRef(null);
  const dispatch = useDispatch();
  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('E-mail inválido')
          .required('E-mail obrigatório'),
        token: Yup.string()
          .min(30, 'mínimo 30 caracteres')
          .max(45, 'máximo 45 caracteres')
          .required('Token Obrigatório'),
        password: Yup.string()
          .min(6, 'mínimo 6 caracteres')
          .max(50, 'máximo 50 caracteres')
          .required('Senha Obrigatória'),
        passwordRepite: Yup.string()
          .oneOf([Yup.ref('password')], 'Senha não coincidem')
          .required('Confirmação de senha obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current.setErrors({});
      reset();
      const { email, token, password } = data;
      dispatch(
        actionsRecovery.RecoveryPasswordRequest({ email, token, password })
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};
        error.inner.forEach((erro) => {
          errorMessages[erro.path] = erro.message;
          formRef.current.clearField(erro.path);
        });
        if (errorMessages.email !== undefined) {
          formRef.current.getFieldRef('email').focus();
        } else if (errorMessages.token !== undefined) {
          formRef.current.getFieldRef('token').focus();
        } else if (errorMessages.password !== undefined) {
          formRef.current.getFieldRef('password').focus();
        } else {
          formRef.current.getFieldRef('passwordRepite').focus();
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
      <Title>Criar uma nova senha</Title>
      <Paragraph>
        Verifique sua caixa de entrada de e-mail para obter um código para
        concluir a redefinição.
      </Paragraph>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <span className="email">
          <FaAt size={24} />
        </span>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />

        <span className="token">
          <SiJsonwebtokens size={24} />
        </span>
        <Input name="token" type="text" placeholder="Digite o código aqui" />

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
        <Button>
          <span>Redefinir</span>
          <FaRedoAlt size={20} />
        </Button>
      </Form>
    </Container>
  );
}
