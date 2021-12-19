import styled from 'styled-components';

interface ButtonStyledProps {
  backgroundColor: string;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  border: none;
  border-radius: 3px;
  padding-top: 2px;
  padding-bottom: 2px;
  width: 34px;
  font-size: 7px;
  font-family: Helvetica;
  font-weight: medium;
  color: #ffffff;
  background-color: ${(props) => props.backgroundColor};
`;
