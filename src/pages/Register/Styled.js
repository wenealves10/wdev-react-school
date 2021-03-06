import styled from 'styled-components';
import { Form as Forms } from '@unform/web';
import { FaRegEye as Eye, FaRegEyeSlash as NoEye } from 'react-icons/fa';
import * as colors from '../../config/colors';

export const Form = styled(Forms)`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 500px;
  margin: 0 auto;

  span.name {
    font-size: 1.2em;
    font-weight: bold;
    align-self: flex-start;
    position: absolute;
  }
  span.email {
    font-size: 1.2em;
    font-weight: bold;
    align-self: flex-start;
    position: absolute;
    top: 59px;
  }
  span.password {
    font-size: 1.2em;
    font-weight: bold;
    align-self: flex-start;
    position: absolute;
    top: 120px;
  }

  span.password-repite {
    font-size: 1.2em;
    font-weight: bold;
    align-self: flex-start;
    position: absolute;
    top: 180px;
  }

  span.name-error {
    font-size: 0.8em;
    margin-left: 10px;
    color: ${colors.primaryColor};
    align-self: flex-start;
    position: absolute;
    top: 33px;
  }

  span.email-error {
    font-size: 0.8em;
    margin-left: 10px;
    color: ${colors.primaryColor};
    align-self: flex-start;
    position: absolute;
    top: 94px;
  }

  span.password-error {
    font-size: 0.8em;
    margin-left: 10px;
    color: ${colors.primaryColor};
    align-self: flex-start;
    position: absolute;
    top: 154px;
  }

  span.passwordRepite-error {
    font-size: 0.8em;
    margin-left: 10px;
    color: ${colors.primaryColor};
    align-self: flex-start;
    position: absolute;
    top: 212px;
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

export const Title = styled.h1`
  font-size: 1.6em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const FaRegEye = styled(Eye)`
  font-size: 1.2em;
  font-weight: bold;
  align-self: flex-start;
  position: absolute;
  top: ${(props) => props.top};
  right: 10px;
  cursor: pointer;
`;

export const FaRegEyeSlash = styled(NoEye)`
  font-size: 1.2em;
  font-weight: bold;
  align-self: flex-start;
  position: absolute;
  top: ${(props) => props.top};
  right: 10px;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 70%;
  height: 40px;
  background-color: ${colors.primaryColor};
  padding: 5px;
  margin: 0px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.4em;
    margin-right: 15px;
  }
`;
