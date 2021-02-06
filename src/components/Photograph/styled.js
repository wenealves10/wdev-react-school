import styled from 'styled-components';
import { FaEdit as FaEditt } from 'react-icons/fa';
import * as colors from '../../config/colors';

export const Container = styled.div`
  &:hover {
    div.button-edit-student {
      color: #fff;
    }
  }
`;

export const Picture = styled.div`
  margin-top: 15px;
`;
export const Photographs = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 1px solid #ccc;
`;

export const ActionEdit = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 500ms;
  color: ${colors.secondaryColor};
  input[type='file'] {
    display: none;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const FaEdit = styled(FaEditt)`
  position: absolute;
  bottom: 5px;
`;
