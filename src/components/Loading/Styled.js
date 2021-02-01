import styled from 'styled-components';
import Lotties from 'react-lottie';
// import * as colors from '../../config/colors';

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    position: absolute;
    z-index: 1;
    background-color: rgba(255, 255, 255, 1);
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  pointer-events: none;
`;

export const Lottie = styled(Lotties)`
  z-index: 2;
`;
