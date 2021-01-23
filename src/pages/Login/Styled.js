import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import * as colors from '../../config/colors';

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  span {
    font-size: 1.2em;
    font-weight: bold;
    align-self: flex-start;
  }
  input {
    margin-bottom: 8px;
    padding: 0 15px;
    font-size: 1em;
    font-weight: 600;
    width: 100%;
    height: 30px;
    outline: none;
    border-color: ${colors.secondaryColor};
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 30px;
  background-color: ${colors.primaryColor};
`;
