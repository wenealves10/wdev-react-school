import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.6em;
`;

export const StudentsContainer = styled.div`
  text-align: left;
  margin-top: 8px;
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
  span.dates {
    font-size: 0.8em;
    font-weight: 600;
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
  width: 100px;
  height: 40px;
  margin-top: 18px;
  margin-bottom: 20px;
`;
