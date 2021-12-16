import styled from 'styled-components';

interface ButtonStyledBase {
  backgroundColor: string;
}

export const ButtonStyledBase = styled.button<ButtonStyledBase>`
  border: none;
`;
