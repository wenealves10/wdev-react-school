import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import * as colors from '../../config/colors';

export const Title = styled.div`
  font-size: 1.6em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 25px;
  span {
    font-weight: bold;
  }
`;

export const Form = styled(Unform)`
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
  span.surname {
    font-size: 1.2em;
    font-weight: bold;
    align-self: flex-start;
    position: absolute;
    left: 52%;
  }

  span.surname {
    font-size: 1.2em;
    font-weight: bold;
    align-self: flex-start;
    position: absolute;
    left: 52%;
  }

  span.email {
    font-size: 1.2em;
    font-weight: bold;
    align-self: flex-start;
    position: absolute;
    top: 59px;
  }

  span.age {
    font-size: 1.2em;
    font-weight: bold;
    align-self: flex-start;
    position: absolute;
    top: 120px;
  }

  span.height {
    font-size: 1.2em;
    font-weight: bold;
    align-self: flex-start;
    position: absolute;
    top: 120px;
    left: 34.3%;
  }

  span.weight {
    font-size: 1.2em;
    font-weight: bold;
    align-self: flex-start;
    position: absolute;
    top: 120px;
    left: 70%;
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
  span.surname-error {
    font-size: 0.8em;
    margin-left: 10px;
    color: ${colors.primaryColor};
    align-self: flex-start;
    position: absolute;
    top: 33px;
    left: 52%;
  }

  span.age-error {
    font-size: 0.8em;
    margin-left: 10px;
    color: ${colors.primaryColor};
    align-self: flex-start;
    position: absolute;
    top: 153px;
  }

  span.height-error {
    font-size: 0.8em;
    margin-left: 10px;
    color: ${colors.primaryColor};
    align-self: flex-start;
    position: absolute;
    top: 153px;
    left: 34.3%;
  }

  span.weight-error {
    font-size: 0.8em;
    margin-left: 10px;
    color: ${colors.primaryColor};
    align-self: flex-start;
    position: absolute;
    top: 153px;
    left: 70%;
  }

  span.name_surname {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    input {
      width: 48%;
    }
  }

  span.characteristics {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    input {
      width: 30%;
    }
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
