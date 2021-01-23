import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: white;
    margin-left: 20px;
  }
`;
