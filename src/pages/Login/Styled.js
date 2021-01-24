import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import { FaRegEye as Eye, FaRegEyeSlash as NoEye } from 'react-icons/fa';
import * as colors from '../../config/colors';

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  position: relative;
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
  }
`;

export const FaRegEye = styled(Eye)`
  font-size: 1.2em;
  font-weight: bold;
  align-self: flex-start;
  position: absolute;
  top: 59px;
  right: 10px;
  cursor: pointer;
`;

export const FaRegEyeSlash = styled(NoEye)`
  font-size: 1.2em;
  font-weight: bold;
  align-self: flex-start;
  position: absolute;
  top: 59px;
  right: 10px;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  background-color: ${colors.primaryColor};
`;
