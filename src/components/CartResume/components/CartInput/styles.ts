import styled, { css } from 'styled-components';

export const InputStyled = styled.input`
  border: 1px solid #00000042;
  border-radius: 4px;
  font-size: 18px;
  font-family: Roboto;
  padding: 14px;
`;

interface InputPlaceholderProps {
  isShown: boolean;
}

export const InputPlaceholder = styled.h5<InputPlaceholderProps>`
  font-size: 14px;
  font-family: Roboto;
  color: #3d3d3d;
  background-color: #ffffff;

  ${(props) =>
    !props.isShown &&
    css`
      display: none;
    `}
`;

export const InputContainer = styled.div`
  display: flex;

  > ${InputPlaceholder} {
    position: absolute;
    margin: 0px;
    margin-top: -8px;
    margin-left: 15px;
    padding-left: 5px;
    padding-right: 5px;
  }

  > ${InputStyled} {
    flex: 1;
  }
`;
