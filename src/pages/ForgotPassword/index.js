import React, { useRef } from 'react';
import * as Yup from 'yup';
import { FaAt, FaTelegramPlane } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Title, Paragraph, Button } from './Styled';
import { Container } from '../../styles/Global';
import Input from '../../components/Form/Input';
import Loading from '../../components/Loading';
import * as actionsForgotPassword from '../../store/modules/Authentication/actions';

export default function ForgotPassword() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('E-mail Inválido')
          .required('E-mail é obrigatório'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current.setErrors({});
      reset();
      const { email } = data;
      dispatch(actionsForgotPassword.ForgotPasswordRequest({ email }));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};
        error.inner.forEach((erro) => {
          errorMessages[erro.path] = erro.message;
          formRef.current.clearField(erro.path);
        });
        formRef.current.getFieldRef('email').focus();
        formRef.current.setErrors(errorMessages);
      }
    }
  }
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Redefina sua senha</Title>
      <Paragraph>
        Para redefinir sua senha, digite seu e-mail abaixo e envie. Um e-mail
        será enviado a você com instruções sobre como concluir o processo.
      </Paragraph>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <span className="email">
          <FaAt size={24} />
        </span>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Button type="submit">
          <span>Enviar</span>
          <FaTelegramPlane size={30} />
        </Button>
      </Form>
    </Container>
  );
}
