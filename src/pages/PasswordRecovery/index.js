import React, { useRef, useState } from 'react';
// import * as Yup from 'yup';
import { FaAt, FaRedoAlt, FaLock } from 'react-icons/fa';
import { SiJsonwebtokens } from 'react-icons/si';
// import { useDispatch } from 'react-redux';
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
// import * as actionsForgotPassword from '../../store/modules/Authentication/actions';

export default function PasswordRecovery() {
  const [eye, setEye] = useState(false);
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    console.log(data);
    reset();
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
          name="password-repite"
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
