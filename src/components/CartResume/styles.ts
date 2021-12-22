import { ButtonStyled as CartButton } from 'components/Buttons/CartButton/styles';
import HR from 'components/HR';
import styled, { css } from 'styled-components';
import { InputContainer as CartInput } from './components/CartInput/styles';

export const CartResumeTitle = styled.h2`
  font: normal normal normal 24px/32px Montserrat;
  letter-spacing: 0px;
  color: #17181d;

  margin: 0;
`;

interface CartResumeValueContaineProps {
  isShown?: boolean;
}

export const CartResumeValueContainer = styled.div<CartResumeValueContaineProps>`
  align-items: center;
  display: flex;

  > * {
    margin: 0;
  }

  > :nth-child(1) {
    flex: 1;
  }

  > p {
    font: normal normal 500 14px/21px Montserrat;
    letter-spacing: 0px;
    color: #17181d;
  }

  > b {
    font: normal normal 600 14px/21px Montserrat;
    letter-spacing: 0px;
    color: #17181d;
  }

  ${(props) =>
    props.isShown === false &&
    css`
      display: none;
    `}
`;

export const CartResumeTotal = styled.div`
  align-items: center;

  > * {
    margin: 0;
  }

  > :nth-child(1) {
    flex: 1;
  }

  > p {
    font: normal normal 600 14px/21px Montserrat;
    letter-spacing: 0px;
    color: #17181d;
  }

  > b {
    font: normal normal 700 20px/30px Montserrat;
    letter-spacing: 0px;
    color: #17181d;
  }
`;

export const CartResumeContainer = styled.div`
  > ${CartResumeTitle} {
    & + ${CartInput} {
      margin-top: 60px;

      & + ${CartResumeValueContainer} {
        margin-top: 30px;
      }
    }
  }

  > ${CartResumeValueContainer} {
    margin-bottom: 16px;
  }

  > ${CartResumeValueContainer} + ${HR} {
    margin-top: 24px;
  }

  > ${CartResumeTotal} {
    display: flex;
  }

  > div.cart-button-container {
    display: flex;
    flex-direction: column;

    > * {
      align-self: center;
    }

    > ${CartButton} {
      margin-top: 70px;

      & + ${CartButton} {
        margin-top: 32px;
      }
    }
  }
`;
