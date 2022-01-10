import styled from 'styled-components';

export const Theme = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  inline-size: fit-content;

  background-color: #00000014;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;

  user-select: none;

  > p {
    font: normal normal normal 12px/18px Roboto;
    letter-spacing: 0px;
    color: #1c1c1c;

    & + svg {
      margin-left: 5px;
      cursor: pointer;
    }
  }
`;

export const ThemesContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  gap: 8px;

  ${Theme} + ${Theme} {
    margin-left: 6px;
  }

  ${Theme}:last-of-type {
    margin-right: 26px;
  }
`;

export const ThemeSelectorContainer = styled.div`
  > h5 {
    & + ${ThemesContainer} {
      margin-top: 16px;
    }

    margin: 0px;
    font: normal normal 600 9px/11px Montserrat;
    letter-spacing: 0px;
    color: #000000;
    text-transform: uppercase;
  }
`;
