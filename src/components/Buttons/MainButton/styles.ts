import styled from 'styled-components';
import { ButtonStyledBase } from '../styles';

export const ButtonStyled = styled(ButtonStyledBase)`
  border-radius: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 108px;
  background-color: ${(props) => props.backgroundColor};
  font-size: 15px;
  font-family: Helvetica;
  font-weight: bold;
  color: #ffffff;
`;
