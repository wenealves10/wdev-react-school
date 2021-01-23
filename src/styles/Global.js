import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100vh;
    background: ${colors.secondaryColor};
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
    font-family: sans-serif;
    color: ${colors.primaryColor}
  }

  button{
    border: 0;
    cursor: pointer;
    background-color: ${colors.primaryColor};
    color: #fff;
    font-size: 0.8em;
    font-weight: 700;
    border-radius: 4px;
  }

  ul{
    list-style-type: none;
  }

  a{
    text-decoration: none;
    color: ${colors.primaryColor}
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success{
    background: ${colors.successColor}
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error{
    background: ${colors.errorColor}
  }

`;

export const Container = styled.section`
  max-width: 500px;
  background: #fff;
  margin: 15px auto;
  border-radius: 8px;
  text-align: center;
  padding: 15px;
`;
