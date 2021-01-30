import styled from 'styled-components';
import { Link as Links } from 'react-router-dom';

export const Title = styled.h1`
  font-size: 1.6em;
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
      font-weight: normal;
    }
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

export const Link = styled(Links)`
  margin-left: 20px;
`;
