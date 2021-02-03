import React, { useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import {
  FaPencilAlt,
  FaAt,
  FaGraduationCap,
  FaHourglassHalf,
  FaRuler,
  FaWeight,
} from 'react-icons/fa';
import { Form, Title, Button } from './Styled';
import { Container } from '../../styles/Global';
import Input from '../../components/Form/Input';

export default function Student() {
  const { id } = useParams();
  const formRef = useRef(null);

  const handleSubmit = useCallback(async (data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(4, 'no mínimo 4 caracteres')
          .max(50, 'no máximo 50 caracteres')
          .required('Nome é obrigatório'),
        surname: Yup.string()
          .min(4, 'no mínimo 4 caracteres')
          .max(255, 'no máximo 255 caracteres')
          .required('Sobrenome é obrigatório'),
        email: Yup.string()
          .email('E-mail inválido')
          .required('E-mail é obrigatório'),
        age: Yup.number()
          .required('Idade é Obrigatória')
          .min(10, 'no mínimo 10 anos')
          .max(30, 'no máximo 30 anos')
          .typeError('Somente números')
          .positive('Somente números positivos')
          .integer('Somente números inteiros'),
        height: Yup.number()
          .typeError('Somente números')
          .min(1, 'no mínimo 1m de altura')
          .max(2, 'no máximo 2m de altura')
          .positive('Somente números positivos')
          .required('Idade é Obrigatória'),
        weight: Yup.number()
          .typeError('Somente números')
          .min(25, 'no mínimo 25kg')
          .max(300, 'no máximo 300kg')
          .positive('Somente números positivos')
          .required('Idade é Obrigatória'),
      });

      const { name, surname, email, age, height, weight } = data;
      const datas = {
        name,
        email,
        surname,
        age: parseInt(age, 10),
        height: parseFloat(height, 10),
        weight: parseFloat(weight, 10),
      };

      await schema.validate(datas, {
        abortEarly: false,
      });
      reset();
      formRef.current.setErrors({});
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
  }, []);

  return (
    <Container>
      <Title>
        <span>{id ? 'Editar Aluno' : 'Adicionar novo aluno'}</span>
      </Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <span className="name">
          <FaGraduationCap size={24} />
        </span>
        <span className="surname">
          <FaPencilAlt size={24} />
        </span>
        <span className="name_surname">
          <Input name="name" type="text" placeholder="Digite o primeiro nome" />
          <Input
            name="surname"
            type="text"
            placeholder="Digite o sobrenome do aluno"
          />
        </span>
        <span className="email">
          <FaAt size={24} />
        </span>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <span className="age">
          <FaHourglassHalf size={24} />
        </span>
        <span className="height">
          <FaRuler size={24} />
        </span>
        <span className="weight">
          <FaWeight size={24} />
        </span>
        <span className="characteristics">
          <Input name="age" type="number" placeholder="18 anos" />
          <Input name="height" type="text" placeholder="1.70" />
          <Input name="weight" type="text" placeholder="75kg" />
        </span>
        <Button type="submit">
          <span>Salvar</span>
        </Button>
      </Form>
    </Container>
  );
}
