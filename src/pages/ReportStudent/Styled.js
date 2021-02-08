import styled from 'styled-components';
import Rodals from 'rodal';
import 'rodal/lib/rodal.css';
import * as colors from '../../config/colors';

export const Title = styled.div`
  font-size: 1.6em;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 24px;
  color: ${colors.primaryColor};
  span {
    margin-left: 10px;
  }
`;

export const ContainerStudentReport = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.primaryDarkColor};
`;

export const Picture = styled.div`
  width: 164px;
  height: 164px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ccc;
  border: 1px solid #ccc;
  margin-top: 24px;
  margin-left: 60px;
`;

export const Line = styled.div`
  background-color: ${colors.primaryColor};
  width: 98%;
  height: 2px;
  margin: 0px auto;
`;

export const StudentData = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 24px;
  span {
    font-size: 1em;
    font-weight: bold;
  }
`;

export const StudentNames = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const StudentCaracteres = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 40%;
  height: 40px;
  background-color: ${colors.primaryColor};
  padding: 5px;
  margin: 0px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.4em;
    margin-left: 10px;
  }
`;

export const Container = styled.section`
  max-width: 900px;
  min-width: 508px;
  background: #fff;
  margin: 30px auto;
  border-radius: 8px;
  text-align: center;
  padding: 30px;
`;

export const ContainerDiscipline = styled.div`
  width: 98%;
`;

export const Disciplines = styled.div`
  margin-top: 10px;
  div + div {
    border-top: 1px solid #eee;
  }
`;

export const Table = styled.table`
  width: 98%;
  margin: 15px auto;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ccc;
    padding: 5px;
  }
  td {
    color: ${colors.primaryDarkColor};
  }
  span.actions {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Rodal = styled(Rodals)`
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
