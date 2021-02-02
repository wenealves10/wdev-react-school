import styled from 'styled-components';
import Rodals from 'rodal';
import 'rodal/lib/rodal.css';
import { Link as Links } from 'react-router-dom';
import * as colors from '../../config/colors';

export const Title = styled.div`
  font-size: 1.6em;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 25px;
  color: ${colors.primaryColor};
  span {
    margin-left: 10px;
  }
`;

export const StudentsContainer = styled.div`
  margin-top: 10px;
  div + div {
    border-top: 1px solid #eee;
  }
`;
export const Student = styled.div`
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  color: #000;
  span.name_email {
    font-size: 1em;
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: space-between;
    strong {
      font-weight: 500;
    }
  }

  span.actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Photograph = styled.div`
  color: #aaa;
`;

export const StudentProfilePhotograph = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
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

export const AddStudent = styled.button`
  width: 70%;
  height: 40px;
  border-radius: 4px;
  background-color: ${colors.primaryColor};
  padding: 5px;
  margin: 0px auto 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 1.4em;
    margin-right: 10px;
  }
`;

export const Rodal = styled(Rodals)`
  position: absolute;
  p {
    color: ${colors.primaryDarkColor};
  }
  div.button-options {
    display: flex;
    position: absolute;
    bottom: 20px;
    width: 100%;
    button {
      width: 30%;
    }
  }
`;

export const Link = styled(Links)`
  margin-left: 20px;
`;
