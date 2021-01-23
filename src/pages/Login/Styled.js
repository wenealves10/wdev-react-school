import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.6em;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 18px;
  margin-bottom: 20px;
  color: ${(props) => (props.isColor ? 'white' : 'blue')};
`;
