import styled, { css } from 'styled-components';

interface ButtonStyledProps {
  outline?: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  border: none;
  border-radius: 20px;
  width: 266px;
  height: 45px;
  background-color: #292c35;
  text-transform: uppercase;
  font-size: 21px;
  font-family: Montserrat;
  font-weight: medium;
  color: ${(props) => props.color};

  ${(props) =>
    props.outline &&
    css`
      border: 2px solid #292c35;
      background-color: transparent;
    `};
`;
