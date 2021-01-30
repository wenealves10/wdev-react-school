import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  font-size: 1.6em;
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  span.email {
    font-size: 1.2em;
    font-weight: bold;
    align-self: flex-start;
    position: absolute;
  }
  span.password {
    font-size: 1.2em;
    font-weight: bold;
    align-self: flex-start;
    position: absolute;
    top: 59px;
  }
  span.password-error {
    font-size: 0.8em;
    margin-left: 10px;
    color: ${colors.primaryColor};
    align-self: flex-start;
    position: absolute;
    top: 92px;
  }
  span.email-error {
    font-size: 0.8em;
    margin-left: 10px;
    color: ${colors.primaryColor};
    align-self: flex-start;
    position: absolute;
    top: 33px;
  }

  input {
    margin-bottom: 30px;
    padding: 0px 15px 0px 30px;
    font-size: 0.8em;
    font-weight: 600;
    width: 100%;
    height: 30px;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: #ccc;
    &:focus {
      border-bottom-color: ${colors.infoColor};
    }
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 18px;
  margin-bottom: 20px;
`;
