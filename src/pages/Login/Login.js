import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Title } from './Styled';
import { Container } from '../../styles/Global';
import axios from '../../services/axios';
import * as Auth from '../../store/modules/Authentication/actions';

export default function Login() {
  const dispatch = useDispatch();
  const isColor = useSelector((state) => state.auth.buttonClick);
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get();
      const { data } = response;
      // eslint-disable-next-line no-console
      console.log(data);
    }
    getData();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(Auth.clickButtonRequest());
  };

  return (
    <Container>
      <Title>Hello World</Title>
      <Button isColor={!isColor} onClick={handleClick}>
        Enviar
      </Button>
    </Container>
  );
}
