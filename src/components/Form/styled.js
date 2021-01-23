import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    margin-top: 10px;
    align-self: flex-start;
    font-size: 1.2em;
    font-weight: bold;
    color: ${colors.secondaryColor};
  }
  input {
    margin-top: 5px;
    width: 100%;
    height: 30px;
    outline: none;
    line-height: 40px;
    padding: 0 15px;
    border-radius: 4px;
    font-size: 1.1em;
    border-color: ${colors.primaryDarkColor};
  }
`;
