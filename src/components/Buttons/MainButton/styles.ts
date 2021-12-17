import styled from 'styled-components';

interface ButtonStyledProps {
  backgroundColor: string;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  border: none;
  border-radius: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 108px;
  height: 40px;
  background-color: ${(props) => props.backgroundColor};
  font-size: 15px;
  font-family: Helvetica;
  font-weight: bold;
  color: #ffffff;
`;
