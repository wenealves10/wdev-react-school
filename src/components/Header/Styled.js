import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${colors.primaryColor};
  padding: 15px;
  width: 100%;
  min-width: 508px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: white;
    margin-left: 20px;
    text-align: center;
    span {
      color: white;
      margin-left: 5px;
      display: block;
      font-size: 1em;
      font-weight: bold;
    }
  }
`;
