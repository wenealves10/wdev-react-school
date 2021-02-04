import styled from 'styled-components';
// import * as colors from '../../config/colors';

export const Picture = styled.div`
  margin-top: 15px;
`;
export const Photographs = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 180px;
  height: 180px;
  border-radius: 50%;
`;
