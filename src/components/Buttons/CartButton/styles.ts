import styled, { css } from 'styled-components';
import { ButtonStyledBase } from '../styles';

interface ButtonStyledProps {
  outline?: boolean;
}

export const ButtonStyled = styled(ButtonStyledBase)<ButtonStyledProps>`
  border-radius: 20px;
  width: 266px;
  height: 45px;
  background-color: ${(props) => props.backgroundColor};
  text-transform: uppercase;
  font-size: 21px;
  font-family: Montserrat;
  font-weight: medium;
  color: ${(props) => props.color};

  ${(props) =>
    props.outline &&
    css`
      border: 2px solid ${props.backgroundColor};
      background-color: transparent;
    `};
`;
