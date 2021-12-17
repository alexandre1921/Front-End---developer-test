import styled from 'styled-components';
import { ButtonStyled as CheckoutButton } from '../Buttons/CheckoutButton/styles';
import { ButtonStyled as MainButton } from '../Buttons/MainButton/styles';

export const LogoContainer = styled.div`
  > img {
    height: 37px;
    width: 133px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  height: 48px;

  > ${LogoContainer} {
    flex: 1;
    align-self: center;
  }

  > ${MainButton} {
    align-self: center;
  }

  > ${MainButton} + ${CheckoutButton} {
    margin-left: 44px;
  }

  > ${CheckoutButton} + ${MainButton} {
    margin-left: 24px;
  }

  > ${MainButton} + ${MainButton} {
    margin-left: 48px;
  }
`;
